import { User, Edit3, Heart, Clock, Star } from 'lucide-react'
import Card from '../components/ui/Card'

const ProfilePage = () => {
  const userData = {
    name: 'Chef Explorer',
    email: 'chef@example.com',
    favoriteRecipes: 24,
    cookingTime: '127 hours',
    avgRating: 4.8,
    joinDate: 'January 2024'
  }

  const favoriteRecipes = [
    {
      id: 1,
      title: 'Creamy Mushroom Risotto',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400',
      rating: 4.9,
      cookTime: 35
    },
    {
      id: 2,
      title: 'Grilled Salmon with Herbs',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400',
      rating: 4.7,
      cookTime: 25
    },
    {
      id: 3,
      title: 'Chocolate Lava Cake',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400',
      rating: 4.8,
      cookTime: 40
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            My Profile
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Track your culinary journey and favorite recipes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{userData.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{userData.email}</p>
              
              <button className="w-full bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-600 hover:to-accent-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 mb-6">
                <Edit3 className="w-4 h-4 inline mr-2" />
                Edit Profile
              </button>

              <div className="text-sm text-gray-500 dark:text-gray-400">
                Member since {userData.joinDate}
              </div>
            </Card>

            {/* Stats */}
            <Card className="p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Cooking Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-red-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-400">Favorite Recipes</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">{userData.favoriteRecipes}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-400">Total Cooking Time</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">{userData.cookingTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-400">Average Rating</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">{userData.avgRating}★</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Favorite Recipes */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Favorite Recipes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {favoriteRecipes.map((recipe) => (
                  <div key={recipe.id} className="group cursor-pointer">
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{recipe.title}</h4>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-yellow-500">
                            <Star className="w-4 h-4 mr-1 fill-current" />
                            <span className="text-sm">{recipe.rating}</span>
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-sm">{recipe.cookTime}m</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
