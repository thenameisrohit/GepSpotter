// dataService.js

const getData = async () => {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const saveData = async (newData) => {
  try {
    const response = await fetch("data.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    if (!response.ok) {
      throw new Error("Failed to save data");
    }
    console.log("Data saved successfully");
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

const updateData = async (id, newData) => {
  try {
    const response = await fetch(`data.json?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    if (!response.ok) {
      throw new Error("Failed to update data");
    }
    console.log("Data updated successfully");
  } catch (error) {
    console.error("Error updating data:", error);
  }
};

const deleteData = async (id) => {
  try {
    const response = await fetch(`data.json?id=${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete data");
    }
    console.log("Data deleted successfully");
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};

export { getData, saveData, updateData, deleteData };
