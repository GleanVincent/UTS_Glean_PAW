const tim = require('../models/timmodel');
const { errorHttp } = require('../middlewares/errorHandler');

exports.create = async (req, res) => {
  try {
    const tim = await Mahasiswa.create(req.body);
    res.status(201).json(tim);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  const data = await Mahasiswa.find();
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await Mahasiswa.findById(req.params.id);
  if (!data) throw errorHttp(404, 'Data tidak ditemukan');
  res.json(data);
};