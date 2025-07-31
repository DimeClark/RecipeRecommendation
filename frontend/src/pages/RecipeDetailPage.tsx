import { useParams } from 'react-router-dom'
import { Star, Clock, Users, Heart, Share2, ChefHat } from 'lucide-react'
import Card from '../components/ui/Card'

const RecipeDetailPage = () => {
  const { id } = useParams()
  
  // Mock recipe data - in real app this would be fetched based on ID
  const recipe = {
    id: 1,
    title: 'Creamy Mushroom Risotto',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800',
    rating: 4.8,
    reviews: 127,
    cookTime: 35,
    servings: 4,
    difficulty: 'Medium',
    description: 'A rich and creamy mushroom risotto that brings comfort and elegance to your dinner table. This classic Italian dish features perfectly cooked arborio rice with a medley of fresh mushrooms.',
    ingredients: [
      '1½ cups Arborio rice',
      '4 cups warm chicken broth',
      '1 lb mixed mushrooms, sliced',
      '1 medium onion, diced',
      '3 cloves garlic, minced',
      '½ cup dry white wine',
      '½ cup grated Parmesan cheese',
      '2 tbsp butter',
      '2 tbsp olive oil',
      'Salt and pepper to taste',
      'Fresh parsley for garnish'
    ],
    instructions: [
      'Heat olive oil in a large pan over medium heat. Add mushrooms and cook until golden. Set aside.',
      'In the same pan, add butter and sauté onion until translucent. Add garlic and cook for 1 minute.',
      'Add rice and stir for 2 minutes until lightly toasted.',
      'Pour in wine and stir until absorbed.',
      'Add warm broth one ladle at a time, stirring constantly until absorbed before adding more.',
      'Continue for 18-20 minutes until rice is creamy but still has a slight bite.',
      'Stir in cooked mushrooms and Parmesan cheese.',
      'Season with salt and pepper, garnish with parsley and serve immediately.'
    ],
    nutrition: {
      calories: 340,
      protein: '12g',
      carbs: '52g',
      fat: '8g'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="relative mb-12">
          <div className="aspect-video rounded-2xl overflow-hidden mb-8">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute top-4 right-4 flex space-x-2">
            <button className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-200">
              <Heart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-200">
              <Share2 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
                {recipe.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-1 fill-current" />
                  <span className="font-semibold text-gray-900 dark:text-white">{recipe.rating}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">({recipe.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>{recipe.cookTime} mins</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Users className="w-5 h-5 mr-1" />
                  <span>{recipe.servings} servings</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChefHat className="w-5 h-5 mr-1" />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {recipe.description}
              </p>
            </div>

            {/* Ingredients */}
            <Card className="p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Ingredients</h2>
              <div className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 dark:text-gray-300">{ingredient}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Instructions */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Instructions</h2>
              <div className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Nutrition Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Calories</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{recipe.nutrition.calories}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Protein</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{recipe.nutrition.protein}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Carbs</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{recipe.nutrition.carbs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Fat</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{recipe.nutrition.fat}</span>
                </div>
              </div>
            </Card>

            <button className="w-full bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-600 hover:to-accent-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 mb-4">
              Start Cooking
            </button>
            
            <button className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-6 py-4 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
              Add to Shopping List
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetailPage
