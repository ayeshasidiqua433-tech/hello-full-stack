// Abhi database nahi hai, isliye data array me rakhte hain
let products = [
  { id: 1, name: "Laptop", price: 85000 },
  { id: 2, name: "Mouse", price: 1500 },
];
let nextId = 3;

// GET /api/products   (optional search: /api/products?name=lap)
const getProducts = (req, res) => {
  const { name } = req.query;

  if (name) {
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.status(200).json(filtered);
  }

  res.status(200).json(products);
};

// GET /api/products/:id
const getProductById = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product nahi mila" });
  }

  res.status(200).json(product);
};

// POST /api/products
const createProduct = (req, res) => {
  const { name, price } = req.body || {};

  if (!name || price === undefined) {
    return res.status(400).json({ message: "name aur price dono zaroori hain" });
  }

  const newProduct = { id: nextId++, name, price };
  products.push(newProduct);

  res.status(201).json(newProduct);
};

// PUT /api/products/:id
const updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product nahi mila" });
  }

  const { name, price } = req.body || {};
  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = price;

  res.status(200).json(product);
};

// DELETE /api/products/:id
const deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product nahi mila" });
  }

  const deleted = products.splice(index, 1)[0];

  res.status(200).json({ message: "Product delete ho gaya", product: deleted });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};