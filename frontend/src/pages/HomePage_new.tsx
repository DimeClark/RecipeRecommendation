import { ArrowRight, Sparkles, ChefHat, Search, Heart, Camera, Zap, Brain } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../components/ui/Card'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const HomePage = () => {
  const [heroRef, heroVisible] = useScrollAnimation()
  const [featuresRef, featuresVisible] = useScrollAnimation()

  const features = [
    {
      icon: Brain,
      title: 'AI Recipe Discovery',
      description: 'Our advanced AI analyzes your preferences and dietary needs to suggest perfect recipes tailored just for you.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Camera,
      title: 'Smart Ingredient Scanner',
      description: 'Point your camera at ingredients and instantly get recipe suggestions. No more wondering what to cook!',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Heart,
      title: 'Personalized Collections',
      description: 'Save favorites, create custom collections, and build your personal cookbook with intelligent organization.',
      gradient: 'from-pink-500 to-red-600'
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/10 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed top-1/3 right-10 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-red-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="fixed bottom-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
        <div 
          ref={heroRef}
          className={`max-w-6xl mx-auto text-center transition-all duration-1000 ease-out ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 glass rounded-full border border-white/20 backdrop-blur-xl">
            <Sparkles className="w-5 h-5 mr-3 text-yellow-400 animate-pulse" />
            <span className="text-sm font-semibold text-white tracking-wide">AI-POWERED CULINARY EXPERIENCE</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-8 leading-none">
            <span className="block text-white mb-4">
              Cook Like a
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Professional
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Experience the future of cooking with our revolutionary AI-powered platform. 
            Discover personalized recipes, smart ingredient recognition, and professional culinary guidance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/discover">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-[0_10px_40px_0_rgba(59,130,246,0.4)] hover:shadow-[0_20px_60px_0_rgba(59,130,246,0.6)] overflow-hidden">
                <span className="relative z-10 flex items-center text-lg">
                  Start Your Journey
                  <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </Link>
            
            <Link to="/recipes">
              <button className="px-12 py-5 glass hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-xl text-lg">
                Explore Recipes
              </button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-sm text-gray-400 font-medium">Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                5K+
              </div>
              <div className="text-sm text-gray-400 font-medium">Happy Cooks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-sm text-gray-400 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={featuresRef}
          className="max-w-7xl mx-auto"
        >
          <div className={`text-center mb-24 transition-all duration-1000 ease-out ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Experience cooking like never before with our cutting-edge technology and intelligent design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-10 group cursor-pointer hover:scale-105 transition-all duration-700"
                delay={index * 300}
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${feature.gradient} p-5 mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-blue-400 group-hover:text-purple-400 transition-colors duration-500">
                  <span className="text-sm font-bold tracking-wide">DISCOVER MORE</span>
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                Ready to Transform Your Cooking?
              </h3>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join thousands of home cooks who have already revolutionized their kitchen experience with RecipeAI.
              </p>
              <Link to="/discover">
                <button className="px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-[0_10px_40px_0_rgba(59,130,246,0.4)] hover:shadow-[0_20px_60px_0_rgba(59,130,246,0.6)] text-lg">
                  Get Started Now
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default HomePage
