import fetch from 'node-fetch';


// controller for recipe search by name --
export const searchRecipeController = async (req, res) => {
    try {
        const { recipeName } = req.body;

        // Validate the input
        if (!recipeName || typeof recipeName !== 'string') {
            return res.status(400).json({ success: false, error: 'Invalid recipe name provided' });
        }

        // Fetch data from the external API
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(recipeName)}`);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch data from API. Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data || !data.meals) {
            return res.status(404).json({ success: false, error: 'No recipes found' });
        }

        return res.status(200).json({ success: true, data: data.meals });
    } catch (error) {
        console.error('Error searching recipe:', error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
}


// controller for fetch random recipe --
export const getRandomRecipe = async (req,res) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)

        if (!response.ok) {
            throw new Error(`Failed to fetch data from API. Status: ${response.status}`);
        }

        const data = await response.json();

        return res.status(200).json({success: true, data: data.meals})
        
    } catch (error) {
        console.error('Error in fetching random recipe:', error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
}

// Controller for fetching a recipe by ID
export const getRecipeById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch recipe with ID ${id}. Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data || !data.meals) {
            return res.status(404).json({ success: false, error: 'Recipe not found' });
        }

        return res.status(200).json({ success: true, data: data.meals[0] });
    } catch (error) {
        console.error('Error fetching recipe:', error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
};
