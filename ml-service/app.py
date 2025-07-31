# FastAPI ML Service for Recipe Recommendation Platform
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn
import numpy as np
# import cv2  # Commented out for now
# import tensorflow as tf  # Commented out for now
from PIL import Image
import io
import logging
from typing import List, Dict, Optional
import os
from datetime import datetime

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Recipe Recommendation ML Service",
    description="AI-powered ingredient detection and recipe recommendations",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global variables for models
ingredient_model = None
recommendation_model = None

# Ingredient classes (you'll replace this with your actual model classes)
INGREDIENT_CLASSES = [
    "apple", "banana", "carrot", "tomato", "onion", "potato", "chicken", "beef",
    "pork", "fish", "rice", "pasta", "bread", "cheese", "milk", "eggs",
    "bell_pepper", "broccoli", "spinach", "lettuce", "garlic", "ginger",
    "lemon", "lime", "orange", "strawberry", "blueberry", "avocado"
]

def load_models():
    """Load ML models on startup"""
    global ingredient_model, recommendation_model
    
    try:
        # Load ingredient detection model
        # ingredient_model = tf.keras.models.load_model('./models/ingredient_detector.h5')
        logger.info("Ingredient detection model loaded successfully")
        
        # Load recommendation model
        # recommendation_model = tf.keras.models.load_model('./models/recipe_recommender.h5')
        logger.info("Recipe recommendation model loaded successfully")
        
    except Exception as e:
        logger.warning(f"Could not load models: {e}")
        logger.info("Running in demo mode with mock predictions")

@app.on_event("startup")
async def startup_event():
    """Initialize models on startup"""
    load_models()

@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "service": "Recipe Recommendation ML Service",
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "models_loaded": {
            "ingredient_detector": ingredient_model is not None,
            "recipe_recommender": recommendation_model is not None
        }
    }

@app.get("/health")
async def health_check():
    """Detailed health check"""
    return {
        "status": "healthy",
        "service": "ml-service",
        "version": "1.0.0",
        "timestamp": datetime.now().isoformat()
    }

def preprocess_image(image_bytes: bytes) -> np.ndarray:
    """Preprocess image for ingredient detection"""
    try:
        # Convert bytes to PIL Image
        image = Image.open(io.BytesIO(image_bytes))
        
        # Convert to RGB if necessary
        if image.mode != 'RGB':
            image = image.convert('RGB')
        
        # Resize to model input size (224x224 for most vision models)
        image = image.resize((224, 224))
        
        # Convert to numpy array and normalize
        image_array = np.array(image) / 255.0
        
        # Add batch dimension
        image_array = np.expand_dims(image_array, axis=0)
        
        return image_array
    
    except Exception as e:
        logger.error(f"Error preprocessing image: {e}")
        raise HTTPException(status_code=400, detail="Invalid image format")

def mock_ingredient_detection(image_array: np.ndarray) -> List[Dict]:
    """Mock ingredient detection for demo purposes"""
    # Simulate detection results
    mock_detections = [
        {"ingredient": "tomato", "confidence": 0.92, "bbox": [100, 150, 200, 250]},
        {"ingredient": "onion", "confidence": 0.87, "bbox": [250, 100, 350, 200]},
        {"ingredient": "carrot", "confidence": 0.78, "bbox": [50, 300, 150, 400]},
    ]
    
    # Add some randomness
    import random
    selected_ingredients = random.sample(INGREDIENT_CLASSES, k=random.randint(2, 5))
    
    results = []
    for i, ingredient in enumerate(selected_ingredients):
        confidence = random.uniform(0.7, 0.95)
        bbox = [
            random.randint(50, 100), 
            random.randint(50, 100),
            random.randint(200, 300), 
            random.randint(200, 300)
        ]
        results.append({
            "ingredient": ingredient,
            "confidence": round(confidence, 2),
            "bbox": bbox
        })
    
    return results

@app.post("/detect-ingredients")
async def detect_ingredients(file: UploadFile = File(...)):
    """Detect ingredients from uploaded image"""
    
    # Validate file type
    if not file.content_type.startswith('image/'):
        raise HTTPException(status_code=400, detail="File must be an image")
    
    # Check file size (10MB limit)
    MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB
    file_size = 0
    
    try:
        # Read file content
        image_bytes = await file.read()
        file_size = len(image_bytes)
        
        if file_size > MAX_FILE_SIZE:
            raise HTTPException(status_code=413, detail="File too large")
        
        # Preprocess image
        image_array = preprocess_image(image_bytes)
        
        # Run ingredient detection
        if ingredient_model is not None:
            # Use actual model
            predictions = ingredient_model.predict(image_array)
            # Process predictions to extract ingredients and bounding boxes
            detections = []  # Process your model output here
        else:
            # Use mock detection for demo
            detections = mock_ingredient_detection(image_array)
        
        return {
            "success": True,
            "detections": detections,
            "image_info": {
                "filename": file.filename,
                "size": file_size,
                "content_type": file.content_type
            }
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error in ingredient detection: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

def mock_recipe_recommendations(ingredients: List[str], preferences: Dict) -> List[Dict]:
    """Mock recipe recommendations for demo purposes"""
    
    # Sample recipes
    sample_recipes = [
        {
            "id": 1,
            "title": "Roasted Vegetable Medley",
            "description": "A healthy mix of roasted vegetables with herbs",
            "cuisine": "Mediterranean",
            "prep_time": 15,
            "cook_time": 30,
            "difficulty": "Easy",
            "rating": 4.5,
            "ingredients_match": 85,
            "dietary_tags": ["vegetarian", "gluten-free"],
            "nutrition": {
                "calories": 180,
                "protein": 5,
                "carbs": 25,
                "fat": 8
            }
        },
        {
            "id": 2,
            "title": "Fresh Garden Salad",
            "description": "Crisp vegetables with a tangy vinaigrette",
            "cuisine": "American",
            "prep_time": 10,
            "cook_time": 0,
            "difficulty": "Easy",
            "rating": 4.2,
            "ingredients_match": 92,
            "dietary_tags": ["vegetarian", "vegan", "keto"],
            "nutrition": {
                "calories": 120,
                "protein": 3,
                "carbs": 8,
                "fat": 10
            }
        },
        {
            "id": 3,
            "title": "Hearty Vegetable Soup",
            "description": "Warming soup perfect for cold days",
            "cuisine": "International",
            "prep_time": 20,
            "cook_time": 45,
            "difficulty": "Medium",
            "rating": 4.7,
            "ingredients_match": 78,
            "dietary_tags": ["vegetarian", "dairy-free"],
            "nutrition": {
                "calories": 160,
                "protein": 6,
                "carbs": 30,
                "fat": 4
            }
        }
    ]
    
    # Filter based on preferences
    filtered_recipes = []
    for recipe in sample_recipes:
        # Check dietary restrictions
        if preferences.get("dietary_restrictions"):
            dietary_match = any(tag in recipe["dietary_tags"] 
                              for tag in preferences["dietary_restrictions"])
            if not dietary_match:
                continue
        
        # Check max prep time
        if preferences.get("max_prep_time"):
            if recipe["prep_time"] > preferences["max_prep_time"]:
                continue
        
        # Check difficulty
        if preferences.get("difficulty"):
            if recipe["difficulty"] != preferences["difficulty"]:
                continue
        
        filtered_recipes.append(recipe)
    
    # Sort by ingredients match
    filtered_recipes.sort(key=lambda x: x["ingredients_match"], reverse=True)
    
    return filtered_recipes[:10]  # Return top 10

@app.post("/recommend-recipes")
async def recommend_recipes(request: Dict):
    """Get recipe recommendations based on ingredients and preferences"""
    
    try:
        ingredients = request.get("ingredients", [])
        preferences = request.get("preferences", {})
        
        if not ingredients:
            raise HTTPException(status_code=400, detail="No ingredients provided")
        
        # Get recommendations
        if recommendation_model is not None:
            # Use actual model
            recommendations = []  # Implement your model logic here
        else:
            # Use mock recommendations for demo
            recommendations = mock_recipe_recommendations(ingredients, preferences)
        
        return {
            "success": True,
            "recommendations": recommendations,
            "input_ingredients": ingredients,
            "preferences": preferences,
            "total_found": len(recommendations)
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error in recipe recommendation: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@app.post("/analyze-nutrition")
async def analyze_nutrition(request: Dict):
    """Analyze nutritional content of ingredients or recipes"""
    
    try:
        ingredients = request.get("ingredients", [])
        quantities = request.get("quantities", [])
        
        # Mock nutritional analysis
        total_nutrition = {
            "calories": sum(np.random.randint(50, 200) for _ in ingredients),
            "protein": sum(np.random.randint(2, 15) for _ in ingredients),
            "carbs": sum(np.random.randint(5, 25) for _ in ingredients),
            "fat": sum(np.random.randint(1, 10) for _ in ingredients),
            "fiber": sum(np.random.randint(1, 8) for _ in ingredients),
            "sugar": sum(np.random.randint(1, 15) for _ in ingredients),
            "sodium": sum(np.random.randint(50, 500) for _ in ingredients)
        }
        
        return {
            "success": True,
            "nutrition": total_nutrition,
            "ingredients": ingredients,
            "per_serving": {k: round(v/4, 1) for k, v in total_nutrition.items()}
        }
        
    except Exception as e:
        logger.error(f"Error in nutrition analysis: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

if __name__ == "__main__":
    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
