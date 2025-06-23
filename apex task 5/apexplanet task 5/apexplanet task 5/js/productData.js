const products = [
  { id: 1, name: "Pink Dress", category: "dresses", price: "₹999", material: "Cotton", review: "⭐⭐⭐⭐☆", size: "M, L", img: "https://m.media-amazon.com/images/I/61hK8BsTCEL._AC_UF894,1000_QL80_.jpg" },
  { id: 2, name: "Floral Dress", category: "dresses", price: "₹1,199", material: "Rayon", review: "⭐⭐⭐⭐", size: "S, M, L", img: "https://www.vastranand.in/cdn/shop/files/3_7c1972c8-de21-4ca3-9367-2c143e926b9a.jpg?v=1743074435" },
  { id: 3, name: "Party Gown", category: "dresses", price: "₹2,499", material: "Silk Blend", review: "⭐⭐⭐⭐⭐", size: "L, XL", img: "https://babyproud.in/cdn/shop/files/IMG_20240718_185909.jpg?v=1721312813" },
  { id: 4, name: "Casual Frock", category: "dresses", price: "₹799", material: "Georgette", review: "⭐⭐⭐", size: "M", img: "https://www.libas.in/cdn/shop/files/29163.Main.jpg?v=1747985171" },
  { id: 5, name: "Summer Skirt Set", category: "dresses", price: "₹1,299", material: "Linen", review: "⭐⭐⭐⭐", size: "M, L, XL", img: "https://www.lovesummer.in/cdn/shop/files/GypsySummer1437.jpg?v=1749893619&width=1080" },

  { id: 6, name: "Smartwatch", category: "electronics", price: "₹2,499", material: "Silicone/Rubber", review: "⭐⭐⭐⭐☆", size: "One Size", img: "https://m.media-amazon.com/images/I/519LbXakK4L.jpg" },
  { id: 7, name: "Bluetooth Speaker", category: "electronics", price: "₹1,999", material: "Plastic/Metal", review: "⭐⭐⭐⭐", size: "Portable", img: "https://m.media-amazon.com/images/I/71poiJ97u9L.jpg" },
  { id: 8, name: "Wireless Earbuds", category: "electronics", price: "₹3,299", material: "Plastic", review: "⭐⭐⭐⭐☆", size: "Universal", img: "https://www.boat-lifestyle.com/cdn/shop/files/ACCG6DS7WDJHGWSH_0.png?v=1727669669" },
  { id: 9, name: "LED Monitor", category: "electronics", price: "₹6,499", material: "Metal/Glass", review: "⭐⭐⭐⭐", size: "24 inch", img: "https://www.tpstech.in/cdn/shop/files/81wEGCnscBL._SL1500.jpg?v=1703183550&width=1946" },
  { id: 10, name: "Power Bank 20000mAh", category: "electronics", price: "₹1,299", material: "ABS Plastic", review: "⭐⭐⭐⭐☆", size: "Compact", img: "https://m.media-amazon.com/images/I/71NCm2PnazL.jpg" },

  { id: 11, name: "Lipstick Kit", category: "beauty", price: "₹499", material: "Vegan Ingredients", review: "⭐⭐⭐⭐⭐", size: "Standard", img: "https://m.media-amazon.com/images/I/71GcPs7NUUL.jpg" },
  { id: 12, name: "Nail Polish Set", category: "beauty", price: "₹299", material: "Gloss Finish", review: "⭐⭐⭐⭐", size: "Pack of 5", img: "https://m.media-amazon.com/images/I/71n5e9m55JL._UF1000,1000_QL80_.jpg" },
  { id: 13, name: "Face Cream", category: "beauty", price: "₹399", material: "Aloe Vera Extract", review: "⭐⭐⭐", size: "100ml", img: "https://images.mamaearth.in/catalog/product/1/_/1_45.jpg?format=auto&height=600" },
  { id: 14, name: "Compact Powder", category: "beauty", price: "₹349", material: "Matte Finish", review: "⭐⭐⭐⭐", size: "One Size", img: "https://www.coloressence.com/cdn/shop/files/Starlet-Compact-Powder-CP-2_8cc21ca4-0f9f-42ec-8cb3-d9f836d21468.jpg?v=1712383447" },
  { id: 15, name: "Foundation Stick", category: "beauty", price: "₹599", material: "Cream-based", review: "⭐⭐⭐⭐☆", size: "50g", img: "https://www.lakmeindia.com/cdn/shop/files/1000x100-coverstick-Supplementry-NEW_FOP---with-icons-_-strip-_-swatch---CIvory_1000x.jpg?v=1739170142" },

  { id: 16, name: "Microwave Oven", category: "home", price: "₹5,999", material: "Steel", review: "⭐⭐⭐", size: "20L", img: "https://www.lg.com/content/dam/channel/wcms/in/images/microwave-ovens/mc2886brum_dbkqiln_eail_in_c/gallery/MC2886BRUM-Microwave-ovens-Front-view-DZ-01.jpg" },
  { id: 17, name: "Mixer Grinder", category: "home", price: "₹3,499", material: "ABS + Steel", review: "⭐⭐⭐⭐", size: "500W", img: "https://longwayindia.com/cdn/shop/files/LW-Super-Dlx-Blue-4J-P1_02df9d42-676e-47b6-a15c-d7b661444262.jpg?v=1749629504" },
  { id: 18, name: "Vacuum Cleaner", category: "home", price: "₹4,299", material: "Plastic", review: "⭐⭐⭐⭐☆", size: "1.5L", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ubo22ziVTVHFe2UuDd2JB8XX6WIXWMDvAg&s" },
  { id: 19, name: "Air Conditioner", category: "home", price: "₹27,999", material: "Metal/Plastic", review: "⭐⭐⭐⭐", size: "1.5 Ton", img: "https://5.imimg.com/data5/SELLER/Default/2023/12/370471389/NS/WJ/WG/2983574/air-conditioner.jpg" },
  { id: 20, name: "Refrigerator", category: "home", price: "₹19,499", material: "Steel/Glass", review: "⭐⭐⭐⭐☆", size: "240L", img: "https://images-cdn.ubuy.co.in/65979c2cb910f53d2e6e34ae-3-5cu-ft-compact-refrigerator-mini.jpg" },

  { id: 21, name: "Teddy Bear", category: "toys", price: "₹799", material: "Soft Plush", review: "⭐⭐⭐⭐", size: "Large", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeaLn4w8o_HZLBkys0zJfGq60ypeME7btlmA&s" },
  { id: 22, name: "Doll House", category: "toys", price: "₹1,999", material: "Plastic", review: "⭐⭐⭐⭐☆", size: "Medium", img: "https://hmadmin.hamleys.in/product/491232286/665/491232286-2.jpg" },
  { id: 23, name: "Puzzle Kit", category: "toys", price: "₹399", material: "Cardboard", review: "⭐⭐⭐⭐", size: "100 pieces", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxf40YqLNPxP43MvxFmAhOLQRo54tOliUwf9zW9-ewk5YZMwpkNwId5STrxnvsx5i0RDg&usqp=CAU" },
  { id: 24, name: "RC Car", category: "toys", price: "₹2,299", material: "ABS Plastic", review: "⭐⭐⭐⭐☆", size: "1:16 Scale", img: "https://m.media-amazon.com/images/I/71PqIDbeYfL.jpg" },
  { id: 25, name: "Drawing Kit", category: "toys", price: "₹349", material: "Paper + Color Pens", review: "⭐⭐⭐⭐", size: "20 pcs", img: "https://images.pexels.com/photos/207665/pexels-photo-207665.jpeg?cs=srgb&dl=pexels-pixabay-207665.jpg&fm=jpg" },

  // ✅ New Mobiles Section
  { id: 26, name: "iPhone 14", category: "mobiles", price: "₹79,999", material: "Aluminum + Glass", review: "⭐⭐⭐⭐⭐", size: "128GB", img: "https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg" },
    { id: 27, name: "Samsung Galaxy S23", category: "mobiles", price: "₹74,999", material: "Gorilla Glass Victus", review: "⭐⭐⭐⭐☆", size: "256GB", img: "https://m.media-amazon.com/images/I/71goZuIha-L._UF1000,1000_QL80_.jpg" },
  { id: 29, name: "Redmi Note 13", category: "mobiles", price: "₹13,999", material: "Plastic Back", review: "⭐⭐⭐", size: "128GB", img: "https://www.jiomart.com/images/product/original/rvc8ypwc5i/fastship-rubber-silicone-back-cover-for-realme-narzo-60-pro-5g-transparent-product-images-orvc8ypwc5i-p604366490-0-202309051537.jpg?im=Resize=(420,420)"},
  { id: 30, name: "OnePlus 12R", category: "mobiles", price: "₹42,999", material: "Glass", review: "⭐⭐⭐⭐☆", size: "256GB", img: "https://www.poojaratele.com/media/catalog/product/cache/28b568fbf82d79c53c9eab7361be58d0/3/0/304699_c7shme_1.jpg" }
];
