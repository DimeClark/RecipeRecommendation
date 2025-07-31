import { Plus, Trash2, Check } from 'lucide-react'
import { useState } from 'react'
import Card from '../components/ui/Card'

const ShoppingListPage = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Chicken Breast', quantity: '2 lbs', completed: false },
    { id: 2, name: 'Tomatoes', quantity: '4 large', completed: true },
    { id: 3, name: 'Onions', quantity: '2 medium', completed: false },
  ])
  const [newItem, setNewItem] = useState('')

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, {
        id: Date.now(),
        name: newItem.trim(),
        quantity: '1',
        completed: false
      }])
      setNewItem('')
    }
  }

  const toggleItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            Shopping List
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Keep track of your ingredients and never forget what to buy.
          </p>
        </div>

        <Card className="p-6 mb-8">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Add new item..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addItem()}
              className="flex-1 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
            />
            <button
              onClick={addItem}
              className="bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-600 hover:to-accent-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className={`flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl transition-all duration-200 ${
                  item.completed ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      item.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 dark:border-gray-600 hover:border-primary-500'
                    }`}
                  >
                    {item.completed && <Check className="w-4 h-4" />}
                  </button>
                  <div>
                    <span className={`text-gray-900 dark:text-white ${item.completed ? 'line-through' : ''}`}>
                      {item.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">
                      ({item.quantity})
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors duration-200"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
            
            {items.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  Your shopping list is empty. Add some items to get started!
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ShoppingListPage
