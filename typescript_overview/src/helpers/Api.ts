// import "axios" library
import axios from "axios";

// Define type for API configuration (including optional headers)
interface APIConfig {
  baseURL: string;
  method: string; // Optional method (defaults to GET)
}

// Create reusable base config with environment variable fallback
const baseConfig: APIConfig = {
  baseURL: "https://fakestoreapi.com" || "",
  method: "GET", // Default method to GET
};

// Export function to make API requests
export const getAPI = async (
  url: string
): Promise<{ status: number; data: unknown[] }> => {
  try {
    // Use the URL property from the config object
    const response = await axios({
      ...baseConfig,
      url: `${baseConfig.baseURL}/${url}`,
    });

    return { status: response.status, data: response.data };
  } catch (error) {
    // Handle errors (consider logging or returning a specific error object)
    console.error("Error fetching API data:", error);
    throw error; // Re-throw the error for further handling if needed
  }
};
