import { Camera, Brain, Sparkles, Upload } from 'lucide-react'
import Card from '../components/ui/Card'

const DiscoverPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            AI Recipe Discovery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let our AI help you discover amazing recipes based on your ingredients and preferences.
          </p>
        </div>

        {/* AI Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Ingredient Scanner
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Take a photo of your ingredients and let our AI identify them and suggest recipes.
            </p>
            <button className="bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-600 hover:to-accent-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
              <Upload className="w-5 h-5 inline mr-2" />
              Upload Photo
            </button>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Smart Recommendations
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get personalized recipe recommendations based on your dietary preferences and cooking skills.
            </p>
            <button className="bg-gradient-to-r from-accent-500 to-secondary-500 hover:from-accent-600 hover:to-secondary-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
              <Sparkles className="w-5 h-5 inline mr-2" />
              Get Recommendations
            </button>
          </Card>
        </div>

        {/* Manual Input Section */}
        <Card className="p-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Tell Us What You Have
          </h3>
          <div className="max-w-2xl mx-auto">
            <textarea
              placeholder="Enter your ingredients (e.g., chicken, tomatoes, onions, garlic...)"
              rows={4}
              className="w-full p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white resize-none"
            />
            <div className="mt-6 text-center">
              <button className="bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-600 hover:to-accent-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
                <Brain className="w-5 h-5 inline mr-2" />
                Find Recipes
              </button>
            </div>
          </div>
        </Card>

        {/* Coming Soon Features */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Coming Soon
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Nutritional Analysis</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Get detailed nutritional information for every recipe</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Meal Planning</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">AI-powered weekly meal planning</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Voice Commands</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Find recipes using voice commands</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverPage
