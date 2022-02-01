const Produk = require('../models/Produk')

module.exports = {
    viewProduk: async(req, res) => {
        try {
            const produk = await Produk.find()

            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')
            const alert = {
                message: alertMessage,
                status: alertStatus
            }

            res.render('index', {
                produk,
                alert,
                title: 'Data Produk Toko Al-Barokah'
            })
        } catch (error) {
            res.redirect('/produk')
        }
    },

    addProduk: async(req, res) => {
        try {
            const {nama_produk, keterangan, harga, jumlah} = req.body

            await Produk.create({nama_produk, keterangan, harga, jumlah})

            req.flash('alertMessage', 'Success add data Produk')
            req.flash('alertStatus', 'success')

            res.redirect('/produk')
        } catch (error) {
            req.flash('alertMessage', `${error.message}`)
            req.flash('alertStatus', 'danger')

            res.redirect('/produk')
        }
    },
}