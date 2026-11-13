const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;

// ตั้งค่า Template Engine และ Layouts
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layout');

const products = [
    { id: 'chicken-small', name: 'ไก่ทอดกรอบชุดเล็ก', description: 'ไก่ทอดร้อน ๆ กรอบนอกฉ่ำใน', price: 89, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=85' },
    { id: 'fries', name: 'เฟรนช์ฟรายส์', description: 'ทอดใหม่ กรอบนอกนุ่มใน', price: 49, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=85' },
    { id: 'chicken-large', name: 'ไก่ทอดชุดใหญ่', description: 'แบ่งอร่อยได้ทั้งครอบครัว', price: 159, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=85' },
    { id: 'combo', name: 'ชุดอิ่มคุ้ม', description: 'ไก่ทอดคู่เฟรนช์ฟรายส์', price: 129, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=85' },
    { id: 'chicken-spicy', name: 'ไก่ทอดรสเผ็ด', description: 'เผ็ดจัดจ้าน หอมเครื่องเทศ', price: 99, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=85' },
    { id: 'chicken-wings', name: 'ปีกไก่ทอด', description: 'ปีกไก่ทอดกรอบ ทานง่าย', price: 79, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=85' },
    { id: 'chicken-tenders', name: 'ไก่ไม่มีกระดูก', description: 'เนื้อไก่นุ่มชิ้นพอดีคำ', price: 89, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=85' },
    { id: 'chicken-pop', name: 'ไก่ป๊อป', description: 'ไก่ชิ้นเล็กกรอบอร่อย', price: 59, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=85' },
    { id: 'nuggets', name: 'นักเก็ตไก่', description: 'นักเก็ตทอดร้อน เสิร์ฟพร้อมซอส', price: 69, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=85' },
    { id: 'curly-fries', name: 'เฟรนช์ฟรายส์เกลียว', description: 'มันฝรั่งเกลียวทอดกรอบ', price: 59, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=85' },
    { id: 'cheese-fries', name: 'เฟรนช์ฟรายส์ชีส', description: 'ราดชีสซอสเข้มข้น', price: 69, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=85' },
    { id: 'onion-rings', name: 'หอมทอด', description: 'หอมหัวใหญ่ชุบแป้งทอด', price: 59, image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=85' },
    { id: 'chicken-burger', name: 'เบอร์เกอร์ไก่ทอด', description: 'ไก่ทอดกรอบเต็มชิ้นในขนมปังนุ่ม', price: 99, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=85' },
    { id: 'chicken-wrap', name: 'แรปไก่กรอบ', description: 'ไก่ทอดกรอบห่อแป้งพร้อมผักสด', price: 89, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=85' },
    { id: 'rice-chicken', name: 'ข้าวไก่ทอด', description: 'ข้าวสวยร้อน ๆ กับไก่ทอดกรอบ', price: 79, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=85' },
    { id: 'chicken-salad', name: 'สลัดไก่กรอบ', description: 'ผักสดเสิร์ฟคู่ไก่ทอดกรอบ', price: 99, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85' },
    { id: 'coleslaw', name: 'โคลสลอว์', description: 'สลัดกะหล่ำปลีรสครีมมี่', price: 39, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85' },
    { id: 'cheese-dip', name: 'ชีสดิป', description: 'ชีสซอสเนื้อเนียนสำหรับจิ้ม', price: 20, image: 'https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&w=800&q=85' },
    { id: 'bbq-dip', name: 'ซอสบาร์บีคิว', description: 'ซอสหอมหวานเข้มข้น', price: 15, image: 'https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&w=800&q=85' },
    { id: 'family-set', name: 'ชุดครอบครัว', description: 'ไก่ทอด เฟรนช์ฟรายส์ และดิป', price: 299, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=85' },
];

app.get('/', (req, res) => {
    res.render('index', { title: 'หน้าแรก', activePage: 'home', products });
});

const showProducts = (req, res) => {
    const itemsPerPage = 5;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const requestedPage = Number.parseInt(req.query.page, 10);
    const currentPage = Number.isNaN(requestedPage)
        ? 1
        : Math.min(Math.max(requestedPage, 1), totalPages);
    const startIndex = (currentPage - 1) * itemsPerPage;

    res.render('showProduct', {
        title: 'รายการสินค้า',
        activePage: 'product',
        products: products.slice(startIndex, startIndex + itemsPerPage),
        currentPage,
        totalPages,
        totalProducts: products.length,
        startIndex
    });
};

app.get('/showProduct', showProducts);
app.get('/product', showProducts);

app.get('/product/:id', (req, res) => {
    const product = products.find((item) => item.id === req.params.id);
    if (!product) {
        return res.status(404).send('ไม่พบเมนูที่ต้องการ');
    }
    res.render('product', {
        title: product.name,
        activePage: 'product',
        products,
        selectedProduct: product
    });
});

app.get('/about', (req, res) => {
    const dataId = req.query.dataId;
    let info = 'เราตั้งใจเสิร์ฟไก่ทอดและเฟรนช์ฟรายส์ทอดใหม่ ใส่ใจในรสชาติและความอร่อยทุกออเดอร์';

    if (dataId === '1') {
        info = 'ไก่ทอดของเราปรุงรสอย่างลงตัวและทอดใหม่เพื่อให้กรอบนอก ฉ่ำใน';
    } else if (dataId === '2') {
        info = 'ทีมงานของเราพร้อมดูแลและเสิร์ฟเมนูอร่อยให้คุณอย่างเป็นกันเอง';
    }

    res.render('about', { title: 'เกี่ยวกับเรา', activePage: 'about', info });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

