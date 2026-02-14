import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, X, ChefHat } from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const Recipes = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: '',
    materials: [{ material: '', quantity: '' }]
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMaterialChange = (index, field, value) => {
    const newMaterials = [...formData.materials];
    newMaterials[index][field] = value;
    setFormData(prev => ({
      ...prev,
      materials: newMaterials
    }));
  };

  const addMaterial = () => {
    setFormData(prev => ({
      ...prev,
      materials: [...prev.materials, { material: '', quantity: '' }]
    }));
  };

  const removeMaterial = (index) => {
    if (formData.materials.length > 1) {
      const newMaterials = formData.materials.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        materials: newMaterials
      }));
    }
  };

  const calculateCost = () => {
    return 0.00;
  };

  const handleSaveRecipe = () => {
    console.log('Saving recipe...', formData);
    setShowCreateForm(false);
  };

  const handleProductClick = (productId) => {
    navigate(`/manufacturer/recipe/${productId}`);
  };

  const savedRecipes = [
    { id: 1, name: 'Product 1', rawMaterials: 7, cost: 21022.00 },
    { id: 2, name: 'Product 2', rawMaterials: 6, cost: 24500.00 },
    { id: 3, name: 'Product 3', rawMaterials: 9, cost: 71837.00 }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col lg:ml-64">
        <Header onToggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-auto">
          <div className="mt-14 p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
            {/* Page Header */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Recipes</h1>

            {/* Create Recipes Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 mb-6 shadow-sm">
              <button
                onClick={() => setShowCreateForm(!showCreateForm)}
                className="flex items-center gap-2 text-gray-900 font-medium mb-4"
              >
                <div className="w-5 h-5 border-2 border-gray-400 rounded flex items-center justify-center">
                  {showCreateForm && (
                    <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                  )}
                </div>
                <span className="text-sm sm:text-base">Create Recipes</span>
              </button>

              {showCreateForm && (
                <div className="space-y-4 sm:space-y-6">
                  {/* Product Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="productName"
                      value={formData.productName}
                      onChange={handleInputChange}
                      placeholder="Enter Product Name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  {/* Raw Material */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Raw Material
                    </label>
                    <div className="space-y-3">
                      {formData.materials.map((material, index) => (
                        <div key={index} className="flex flex-col sm:flex-row gap-3 items-start">
                          <input
                            type="text"
                            placeholder="Enter Material"
                            value={material.material}
                            onChange={(e) => handleMaterialChange(index, 'material', e.target.value)}
                            className="w-full sm:flex-1 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          />
                          <div className="flex gap-3 w-full sm:w-auto">
                            <input
                              type="text"
                              placeholder="Enter Quantity"
                              value={material.quantity}
                              onChange={(e) => handleMaterialChange(index, 'quantity', e.target.value)}
                              className="flex-1 sm:w-40 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                            {formData.materials.length > 1 && (
                              <button
                                onClick={() => removeMaterial(index)}
                                className="p-2 sm:p-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={addMaterial}
                      className="mt-3 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add Material
                    </button>
                  </div>

                  {/* Cost to Make */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-gray-700">
                        Cost To Make 1 Unit: ₹{calculateCost().toFixed(2)}
                      </span>
                      <button
                        onClick={handleSaveRecipe}
                        className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                      >
                        Save Recipe
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Saved Recipes Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <ChefHat className="w-5 h-5 text-gray-600" />
                <h2 className="text-base sm:text-lg font-semibold text-gray-900">Saved Recipes</h2>
              </div>

              {/* Recipe Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {savedRecipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    onClick={() => handleProductClick(recipe.id)}
                    className="border border-gray-200 rounded-xl p-4 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0">
                        <span className="text-blue-600 font-semibold text-base">
                          {recipe.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                          {recipe.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Raw Materials: {recipe.rawMaterials}
                        </p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Cost per unit</span>
                        <span className="text-base sm:text-lg font-semibold text-gray-900">
                          ₹{recipe.cost.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {savedRecipes.length === 0 && (
                <div className="text-center py-12">
                  <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No saved recipes yet</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Recipes;