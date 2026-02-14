// src/pages/RecipeDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Menu, ArrowLeft, Edit2, Trash2, ChefHat, Package } from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [recipe, setRecipe] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    // Fetch recipe data based on id
    // This is sample data - replace with actual API call
    const sampleRecipes = {
      1: {
        id: 1,
        name: 'Product 1',
        description: 'A detailed description of Product 1 and how it is manufactured.',
        category: 'Category A',
        unitCost: 21022.00,
        rawMaterials: [
          { id: 1, name: 'Rice Vermicelli', quantity: '500', unit: 'kg', cost: 5000.00 },
          { id: 2, name: 'Thread', quantity: '200', unit: 'meters', cost: 3000.00 },
          { id: 3, name: 'Buttons', quantity: '1000', unit: 'pieces', cost: 2000.00 },
          { id: 4, name: 'Fabric', quantity: '100', unit: 'meters', cost: 8000.00 },
          { id: 5, name: 'Zipper', quantity: '50', unit: 'pieces', cost: 1500.00 },
          { id: 6, name: 'Labels', quantity: '200', unit: 'pieces', cost: 800.00 },
          { id: 7, name: 'Packaging', quantity: '100', unit: 'units', cost: 722.00 }
        ],
        createdDate: '2024-01-15',
        lastModified: '2024-01-20'
      },
      2: {
        id: 2,
        name: 'Product 2',
        description: 'A detailed description of Product 2 and manufacturing process.',
        category: 'Category B',
        unitCost: 24500.00,
        rawMaterials: [
          { id: 1, name: 'Cotton Fabric', quantity: '300', unit: 'meters', cost: 12000.00 },
          { id: 2, name: 'Elastic', quantity: '150', unit: 'meters', cost: 2500.00 },
          { id: 3, name: 'Thread', quantity: '100', unit: 'meters', cost: 1500.00 },
          { id: 4, name: 'Buttons', quantity: '500', unit: 'pieces', cost: 3000.00 },
          { id: 5, name: 'Labels', quantity: '150', unit: 'pieces', cost: 1000.00 },
          { id: 6, name: 'Packaging', quantity: '100', unit: 'units', cost: 4500.00 }
        ],
        createdDate: '2024-01-10',
        lastModified: '2024-01-18'
      },
      3: {
        id: 3,
        name: 'Product 3',
        description: 'A detailed description of Product 3 and its unique features.',
        category: 'Category C',
        unitCost: 71837.00,
        rawMaterials: [
          { id: 1, name: 'Premium Fabric', quantity: '500', unit: 'meters', cost: 35000.00 },
          { id: 2, name: 'Silk Thread', quantity: '300', unit: 'meters', cost: 8000.00 },
          { id: 3, name: 'Designer Buttons', quantity: '800', unit: 'pieces', cost: 5000.00 },
          { id: 4, name: 'Zipper', quantity: '200', unit: 'pieces', cost: 6000.00 },
          { id: 5, name: 'Lining Fabric', quantity: '400', unit: 'meters', cost: 12000.00 },
          { id: 6, name: 'Embroidery', quantity: '100', unit: 'units', cost: 3000.00 },
          { id: 7, name: 'Premium Packaging', quantity: '100', unit: 'units', cost: 2000.00 },
          { id: 8, name: 'Brand Labels', quantity: '100', unit: 'pieces', cost: 500.00 },
          { id: 9, name: 'Accessories', quantity: '50', unit: 'sets', cost: 337.00 }
        ],
        createdDate: '2024-01-05',
        lastModified: '2024-01-22'
      }
    };

    setRecipe(sampleRecipes[id]);
  }, [id]);

  const handleEdit = () => {
    // Navigate to edit page or open edit modal
    console.log('Edit recipe:', id);
  };

  const handleDelete = () => {
    // Show confirmation dialog and delete
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      console.log('Delete recipe:', id);
      navigate('/recipe');
    }
  };

  if (!recipe) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Mobile Header
        <header className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-semibold text-gray-800">Name</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </header> */}

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <button
              onClick={() => navigate('/recipe')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Recipes</span>
            </button>

            {/* Recipe Header Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ChefHat className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold text-gray-900 mb-1">{recipe.name}</h1>
                    <p className="text-sm text-gray-500 mb-2">{recipe.category}</p>
                    <p className="text-gray-600">{recipe.description}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleEdit}
                    className="p-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleDelete}
                    className="p-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Cost Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Cost Per Unit</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    ₹{recipe.unitCost.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Raw Materials</p>
                  <p className="text-2xl font-semibold text-gray-900">{recipe.rawMaterials.length}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Last Modified</p>
                  <p className="text-base font-medium text-gray-900">
                    {new Date(recipe.lastModified).toLocaleDateString('en-IN', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Raw Materials List */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-gray-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Raw Materials Breakdown</h2>
                </div>
              </div>

              {/* Materials Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        #
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Material Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Unit
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Cost (₹)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recipe.rawMaterials.map((material, index) => (
                      <tr key={material.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {material.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {material.quantity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {material.unit}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                          ₹{material.cost.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-50 border-t-2 border-gray-300">
                    <tr>
                      <td colSpan="4" className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                        Total Cost Per Unit:
                      </td>
                      <td className="px-6 py-4 text-right text-lg font-bold text-gray-900">
                        ₹{recipe.unitCost.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> This recipe was created on {new Date(recipe.createdDate).toLocaleDateString('en-IN', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })} and last modified on {new Date(recipe.lastModified).toLocaleDateString('en-IN', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RecipeDetail;