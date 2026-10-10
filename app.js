/**
 * Tha Wung Travel Guide Web Application
 * 7 สถานที่ท่องเที่ยวอำเภอท่าวุ้ง จังหวัดลพบุรี
 */

// ข้อมูล 7 สถานที่ท่องเที่ยวอำเภอท่าวุ้ง
const ATTRACTIONS_DATA = [
  {
    id: 1,
    title: "ที่ว่าการอำเภอโพหวี",
    originalName: "ที่ว่าอำเภอโพหวี (เดิม)",
    category: "history",
    categoryLabel: "ประวัติศาสตร์และต้นกำเนิด",
    location: "ตำบลโพตลาดแก้ว / ตำบลท่าวุ้ง",
    distance: "ห่างจากตัวเมืองลพบุรีประมาณ 5–6 กม.",
    recommendedTime: "เช้า - บ่าย (08:30 - 16:30 น.)",
    rating: "4.7",
    reviewCount: 142,
    image: "images/pho-wi.jpg",
    imageAlt: "ที่ว่าการอำเภอโพหวี (ศาลาโพหวี) อำเภอท่าวุ้ง จังหวัดลพบุรี",
    shortExcerpt: "จุดเริ่มต้นทางประวัติศาสตร์ของอำเภอท่าวุ้ง เดิมตั้งอยู่ ณ ตำบลโพตลาดแก้ว ก่อนย้ายสู่ศูนย์กลางคมนาคมบ้านคลองมะขามเทศ",
    fullDescription: "ที่ว่าอำเภอโพหวี ชื่อเดิมของที่ว่าอำเภอท่าวุ้ง ซึ่งตั้งอยู่ในตำบลโพตลาดแก้ว ห่างจากจังหวัดลพบุรีประมาณ 5–6 กิโลเมตร ต่อมาได้มีการย้ายที่ว่าการอำเภอไปตั้งที่บ้านคลองมะขามเทศ ตำบลท่าวุ้ง เนื่องจากที่ตั้งเดิมไม่สะดวกต่อการติดต่อราชการของประชาชนในพื้นที่ห่างไกล ภายหลังจึงได้เปลี่ยนชื่อเป็นอำเภอท่าวุ้ง เพื่อให้เหมาะสมกับศูนย์กลางการคมนาคมและการติดต่อราชการของประชาชนในพื้นที่มากยิ่งขึ้น",
    highlights: [
      "ศึกษาประวัติศาสตร์และจุดกำเนิดของอำเภอท่าวุ้ง",
      "สถาปัตยกรรมสถานที่ราชการในอดีตและบันทึกความทรงจำชุมชน",
      "เรื่องราวการย้ายถิ่นฐานศูนย์กลางการปกครองจากโพตลาดแก้วสู่คลองมะขามเทศ",
      "เชื่อมโยงเส้นทางท่องเที่ยวริมคลองและเส้นทางสัญจรโบราณ"
    ],
    tips: "เหมาะสำหรับการแวะศึกษาเรื่องราวความเป็นมาของเมืองท่าวุ้งเป็นจุดแรก ก่อนออกเดินทางไปยังจุดสำคัญอื่นๆ ของอำเภอ",
    mapsQuery: "ที่ว่าการอำเภอท่าวุ้ง ลพบุรี",
    tag: "ประวัติศาสตร์"
  },
  {
    id: 2,
    title: "วัดมุจลินท์",
    originalName: "เดิมชื่อ วัดโคกสลุด (พ.ศ.2385)",
    category: "temple",
    categoryLabel: "วัดและโบราณสถาน",
    location: "ตำบลมุจลินท์ อำเภอท่าวุ้ง",
    distance: "ริมคลองสายประวัติศาสตร์ ท่าวุ้ง",
    recommendedTime: "ตลอดทั้งวัน (07:00 - 17:30 น.)",
    rating: "4.8",
    reviewCount: 215,
    image: "images/wat-mujalin.jpg",
    imageAlt: "วัดมุจลินท์ อำเภอท่าวุ้ง จังหวัดลพบุรี",
    shortExcerpt: "วัดโบราณสร้างปี พ.ศ.2385 อดีตจุดยิงปืนสลุดรับเสด็จ ประดิษฐานหลวงพ่อนาคปรกศิลาทรายยุคขอมละโว้ศักดิ์สิทธิ์",
    fullDescription: "วัดมุจลินท์สร้างขึ้นเมื่อปี พ.ศ.2385 เดิมชื่อวัดโคกสลุด ซึ่งสันนิษฐานว่าเป็นสถานที่ยิงปืนสลุดเพื่อรับเสด็จพระมหากษัตริย์ ต่อมาในปี พ.ศ.2522 ได้มีการเปลี่ยนชื่อเป็นวัดมุจลินท์ ภายในวัดมีปูชนียวัตถุสำคัญ ได้แก่ หลวงพ่อนาคปรกศิลาทรายยุคขอมเมืองละโว้ รวมถึงสิ่งศักดิ์สิทธิ์อื่นๆ ที่ประชาชนให้ความเคารพศรัทธา",
    highlights: [
      "หลวงพ่อนาคปรกศิลาทราย ศิลปะขอมยุคเมืองละโว้แท้ อายุนับหลายร้อยปี",
      "ร่องรอยประวัติศาสตร์จุดยิงปืนสลุดรับเสด็จพระมหากษัตริย์ในอดีต",
      "พระอุโบสถและวิหารสงบ ร่มรื่นด้วยต้นไม้ใหญ่นานาพันธุ์",
      "กราบไหว้สิ่งศักดิ์สิทธิ์ขอพรเพื่อความเป็นสิริมงคล แคล้วคลาดปลอดภัย"
    ],
    tips: "ควรแต่งกายสุภาพเรียบร้อยเมื่อเข้ากราบสักการะองค์หลวงพ่อนาคปรกศิลาทรายภายในพระวิหาร",
    mapsQuery: "วัดมุจลินท์ ท่าวุ้ง ลพบุรี",
    tag: "โบราณคดี & ศรัทธา"
  },
  {
    id: 3,
    title: "วัดเขาสมอคอน",
    originalName: "แหล่งรวมสรรพวิชาและที่พำนักสุกกทันตฤาษี",
    category: "temple",
    categoryLabel: "วัดและโบราณสถาน",
    location: "ตำบลเขาสมอคอน อำเภอท่าวุ้ง",
    distance: "บนแนวเทือกเขาสมอคอน ทิวทัศน์ธรรมชาติสวยงาม",
    recommendedTime: "เช้าตรู่หรือช่วงบ่าย (06:30 - 18:00 น.)",
    rating: "4.9",
    reviewCount: 489,
    image: "images/wat-khao-samo-khon.png",
    imageAlt: "วัดเขาสมอคอน (หนุมานแบกเขา) อำเภอท่าวุ้ง จังหวัดลพบุรี",
    shortExcerpt: "วัดเก่าแก่สมัยอยุธยาบนเขาสมอคอน แหล่งรวมสรรพวิชาสุกกทันตฤาษี ชมเจดีย์ทรงลังกา ถ้ำพระนอน และสรีระหลวงพ่อบุญมี",
    fullDescription: "วัดเขาสมอคอนเป็นวัดที่มีความสำคัญทางประวัติศาสตร์มาตั้งแต่สมัยกรุงศรีอยุธยา มีหลักฐานทางสถาปัตยกรรม เช่น เจดีย์ทรงลังกา ตามตำนานกล่าวว่าเขาสมอคอนเป็นแหล่งรวมสรรพวิชา และเป็นที่พำนักของสุกกทันตฤาษี นอกจากนี้ยังมีสถานที่สำคัญภายในวัด เช่น ถ้ำพระนอน และสรีระไม่เน่าเปื่อยของหลวงพ่อบุญมี ซึ่งเป็นที่เคารพศรัทธาของประชาชนในพื้นที่",
    highlights: [
      "เจดีย์ทรงลังกาโบราณ เอกลักษณ์สถาปัตยกรรมสมัยกรุงศรีอยุธยา",
      "ถ้ำพระนอน ภายในมีพระพุทธไสยาสน์และอากาศเย็นสบายตามธรรมชาติ",
      "กราบนมัสการสรีระสังขารไม่เน่าเปื่อยของหลวงพ่อบุญมี เกจิดังแห่งท่าวุ้ง",
      "จุดชมวิวทัศนียภาพมุมสูง มองเห็นท้องทุ่งเขียวขจีของอำเภอท่าวุ้ง",
      "ตามรอยตำนานตักศิลาแห่งเมืองละโว้และสุกกทันตฤาษี"
    ],
    tips: "บริเวณทางขึ้นเขามีลิงธรรมชาติอาศัยอยู่ โปรดดูแลสิ่งของมีค่าและอาหารอย่างระมัดระวัง",
    mapsQuery: "วัดเขาสมอคอน ท่าวุ้ง ลพบุรี",
    tag: "ประวัติศาสตร์อยุธยา"
  },
  {
    id: 4,
    title: "วัดถ้ำตะโก",
    originalName: "วัดถ้ำตะโกพุทธโสภา (หลวงพ่อเภา)",
    category: "temple",
    categoryLabel: "วัดและโบราณสถาน",
    location: "เทือกเขาสมอคอน อำเภอท่าวุ้ง",
    distance: "ใกล้กับวัดเขาสมอคอน เดินทางเชื่อมต่อกันได้สะดวก",
    recommendedTime: "เช้า - บ่ายคล้อย (07:30 - 17:00 น.)",
    rating: "4.8",
    reviewCount: 320,
    image: "images/wat-tham-tako.jpg",
    imageAlt: "วัดถ้ำตะโก (ถ้ำระฆัง วิปัสสนาสถาน) อำเภอท่าวุ้ง จังหวัดลพบุรี",
    shortExcerpt: "สถานปฏิบัติธรรมสร้างปี พ.ศ.2445 โดยหลวงพ่อเภา โดดเด่นด้วยพระเจดีย์ทรงเรือ (เรือมรรคสัจจ์) และถ้ำระฆังหินงอกหินย้อย",
    fullDescription: "วัดถ้ำตะโกตั้งอยู่บนเทือกเขาสมอคอน อำเภอท่าวุ้ง จังหวัดลพบุรี เริ่มสร้างโดยหลวงพ่อเภา เมื่อปี พ.ศ. 2445 เพื่อใช้เป็นสถานที่ปฏิบัติวิปัสสนากรรมฐาน ภายในวัดมีพระเจดีย์ทรงเรือ หรือเรือมรรคสัจจ์ ซึ่งเป็นสัญลักษณ์สำคัญของวัด นอกจากนี้ยังมีถ้ำระฆังที่มีหินงอกหินย้อยตามธรรมชาติ",
    highlights: [
      "พระเจดีย์ทรงเรือ หรือ 'เรือมรรคสัจจ์' สัญลักษณ์ปริศนาธรรมอันงดงามหาชมยาก",
      "ถ้ำระฆัง หินงอกหินย้อยตามธรรมชาติ เมื่อเคาะจะมีเสียงกังวานคล้ายระฆัง",
      "บรรยากาศสัปปายะ เงียบสงบ เหมาะแก่การเจริญสมาธิและปฏิบัติธรรม",
      "รูปหล่อและอนุสรณ์หลวงพ่อเภา พระวิปัสสนาจารย์ผู้มีบารมีเปี่ยมล้น"
    ],
    tips: "ภายในถ้ำควรเดินด้วยความระมัดระวัง และช่วยกันรักษาความสะอาด ไม่จับหรือทำลายหินงอกหินย้อย",
    mapsQuery: "วัดถ้ำตะโก ท่าวุ้ง ลพบุรี",
    tag: "วิปัสสนา & ธรรมชาติ"
  },
  {
    id: 5,
    title: "วัดไลย์",
    originalName: "วัดโบราณริมแม่น้ำบางขาม (พระศรีอาริย์)",
    category: "temple",
    categoryLabel: "วัดและโบราณสถาน",
    location: "ตำบลเขาสมอคอน ริมแม่น้ำบางขาม อำเภอท่าวุ้ง",
    distance: "ติดแม่น้ำบางขาม บรรยากาศร่มรื่น",
    recommendedTime: "เช้าถึงเย็น (07:00 - 18:00 น.)",
    rating: "4.9",
    reviewCount: 612,
    image: "images/wat-lai.jpg",
    imageAlt: "วัดไลย์ ริมแม่น้ำบางขาม อำเภอท่าวุ้ง จังหวัดลพบุรี",
    shortExcerpt: "วัดโบราณริมแม่น้ำบางขาม ประดิษฐานพระศรีอาริย์สำริด ชมภาพปูนปั้นประดับผนังวิหารงดงาม และประเพณีแห่พระกว่า 100 ปี",
    fullDescription: "วัดไลย์ตั้งอยู่ริมแม่น้ำบางขาม เป็นวัดโบราณที่มีความสำคัญทางประวัติศาสตร์ของอำเภอท่าวุ้ง ภายในวัดเป็นที่ประดิษฐานพระศรีอาริย์ หรือพระศรีอริยเมตไตรย ซึ่งเป็นพระพุทธรูปสำริดที่มีลักษณะพิเศษ วัดไลย์ยังมีภาพปูนปั้นประดับผนังที่งดงาม และมีประเพณีแห่พระศรีอริยเมตไตรยซึ่งสืบทอดกันมาเป็นเวลานานกว่า 100 ปี",
    highlights: [
      "กราบขอพร 'พระศรีอาริย์' (พระศรีอริยเมตไตรย) พระพุทธรูปสำริดศักดิ์สิทธิ์คู่เมือง",
      "ภาพปูนปั้นประดับผนังวิหารโบราณ เล่าเรื่องพุทธประวัติและทศชาติชาดกชั้นครู",
      "ประเพณีแห่พระศรีอริยเมตไตรย อันยิ่งใหญ่และสืบทอดมายาวนานกว่า 100 ปี (ช่วงวันขึ้น 14 ค่ำ เดือน 6)",
      "ทิวทัศน์ริมแม่น้ำบางขาม วิถีชีวิตสายนทีร่มรื่นและมุมถ่ายภาพประทับใจ"
    ],
    tips: "อย่าลืมแวะชมพิพิธภัณฑ์ท้องถิ่นและเดินชมความงดงามของลวดลายปูนปั้นหลังพระวิหาร",
    mapsQuery: "วัดไลย์ ท่าวุ้ง ลพบุรี",
    tag: "ศิลปะปูนปั้นชั้นครู"
  },
  {
    id: 6,
    title: "สะพานแดงท่าวุ้ง",
    originalName: "สะพานแขวนเทศบาลตำบลท่าวุ้ง",
    category: "landmark",
    categoryLabel: "แลนด์มาร์คและจุดถ่ายรูป",
    location: "เทศบาลตำบลท่าวุ้ง ข้ามแม่น้ำบางขาม",
    distance: "ใจกลางอำเภอท่าวุ้ง ใกล้ตลาดสด",
    recommendedTime: "ช่วงเย็น 16:30 - 20:00 น. (ชมพระอาทิตย์ตกและไฟประดับ)",
    rating: "4.8",
    reviewCount: 380,
    image: "images/red-bridge-thawung.jpg",
    imageAlt: "สะพานแดงท่าวุ้ง (สะพานแขวนเทศบาลตำบลท่าวุ้ง) ลพบุรี",
    shortExcerpt: "แลนด์มาร์คยอดนิยมสะพานแขวนสีแดงสดข้ามแม่น้ำ จุดถ่ายรูปเช็คอินสุดชิลล์ ลมพัดเย็นสบาย พร้อมเปิดไฟประดับยามค่ำคืน",
    fullDescription: "สะพานแดงท่าวุ้ง หรือสะพานแขวนเทศบาลตำบลท่าวุ้ง เป็นแลนด์มาร์คสำคัญของอำเภอท่าวุ้ง สร้างขึ้นเพื่ออำนวยความสะดวกในการสัญจรของประชาชนในพื้นที่ และกลายเป็นจุดท่องเที่ยวที่ได้รับความนิยมสำหรับการถ่ายภาพและพักผ่อน ในช่วงเวลากลางคืนมีการเปิดไฟประดับอย่างสวยงาม",
    highlights: [
      "สะพานแขวนสีแดงโดดเด่นทอดยาวข้ามลำน้ำ ถ่ายรูปมุมไหนก็สวยสะดุดตา",
      "จุดชมพระอาทิตย์ตกดินสะท้อนผิวน้ำบางขามสุดโรแมนติก",
      "ไฟประดับยามค่ำคืน (Illumination Night) ให้บรรยากาศมีชีวิตชีวา",
      "ลานพักผ่อนหย่อนใจริมน้ำ รับลมธรรมชาติและชมวิถีชีวิตชาวบ้าน"
    ],
    tips: "เวลาที่สวยที่สุดในการถ่ายภาพคือช่วง Magic Hour ประมาณ 17:30 - 18:45 น. และรอชมไฟประดับเปิด",
    mapsQuery: "สะพานแดงท่าวุ้ง ลพบุรี",
    tag: "จุดเช็คอินยอดฮิต"
  },
  {
    id: 7,
    title: "ตลาดสดเทศบาลท่าวุ้ง",
    originalName: "ตลาดโฉมใหม่ พ.ศ.2568 (จากตำนานตลาด 60 ปี)",
    category: "community",
    categoryLabel: "วิถีชีวิตและอาหาร",
    location: "ใจกลางเทศบาลตำบลท่าวุ้ง",
    distance: "เชื่อมต่อกับย่านการค้าและสะพานแดงท่าวุ้ง",
    recommendedTime: "เช้าตรู่ (05:00 - 10:00 น.) และช่วงบ่าย-เย็น",
    rating: "4.7",
    reviewCount: 420,
    image: "images/thawung-fresh-market.png",
    imageAlt: "ตลาดสดเทศบาลท่าวุ้ง อำเภอท่าวุ้ง จังหวัดลพบุรี",
    shortExcerpt: "ตลาดสดปรับปรุงใหม่ปี 2568 ทันสมัย สะอาด ได้มาตรฐาน จากตลาดเดิม 60 ปี ศูนย์รวมของสด อาหารคาวหวานรสเลิศ และวิถีชีวิตท่าวุ้ง",
    fullDescription: "ตลาดสดเทศบาลท่าวุ้ง เป็นตลาดสำคัญของอำเภอท่าวุ้ง ได้รับการปรับปรุงใหม่และเปิดใช้อย่างเป็นทางการในปี พ.ศ. 2568 จากตลาดเดิมที่มีอายุกว่า 60 ปี โดยปรับปรุงให้มีความทันสมัย สะอาด และได้มาตรฐาน จุดเด่นของตลาดคือมีสินค้าและอาหารหลากหลาย ทั้งของสด อาหารคาวหวาน และอาหารสำเร็จรูป ซึ่งเป็นศูนย์กลางการค้าขายและสะท้อนวิถีชีวิตของประชาชนในอำเภอท่าวุ้ง",
    highlights: [
      "อาคารตลาดโฉมใหม่ พ.ศ. 2568 กว้างขวาง สะอาด ถูกสุขอนามัยมาตรฐานสากล",
      "แหล่งรวมอาหารพื้นถิ่น อาหารคาวหวานรสชาติต้นตำรับท่าวุ้ง-ลพบุรี",
      "พืชผักสวนครัวสดๆ ปลาแม่น้ำสด และของฝากจากกลุ่มแม่บ้านเกษตรกร",
      "สัมผัสมิตรภาพและรอยยิ้มอันแสนอบอุ่นของพ่อค้าแม่ค้าชาวท่าวุ้ง"
    ],
    tips: "แนะนำลองชิมขนมไทยโบราณ ขนมต้ม ขนมตาล และอาหารปรุงสดท้องถิ่นในตอนเช้า อร่อยและราคาย่อมเยา",
    mapsQuery: "ตลาดสดเทศบาลท่าวุ้ง ลพบุรี",
    tag: "ของกิน & ของฝาก"
  }
];

// สถานะการทำงานของแอปพลิเคชัน
let currentFilter = 'all';
let searchQuery = '';
let savedBookmarks = JSON.parse(localStorage.getItem('thawung_favorites') || '[]');

// DOM Elements Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderAttractions();
  setupFilterTabs();
  setupSearchInput();
  setupModalEvents();
  setupBookmarkDrawer();
  updateBookmarkCount();
  setupScrollEffects();
});

/**
 * แสดงรายการการ์ดสถานที่ท่องเที่ยว
 */
function renderAttractions() {
  const container = document.getElementById('attractions-grid');
  if (!container) return;

  // กรองข้อมูลตามหมวดหมู่และคำค้นหา
  const filteredData = ATTRACTIONS_DATA.filter(item => {
    const matchCategory = (currentFilter === 'all') 
      || (currentFilter === 'favorites' && savedBookmarks.includes(item.id))
      || (item.category === currentFilter);
      
    const searchLower = searchQuery.toLowerCase().trim();
    const matchSearch = !searchLower 
      || item.title.toLowerCase().includes(searchLower)
      || item.originalName.toLowerCase().includes(searchLower)
      || item.shortExcerpt.toLowerCase().includes(searchLower)
      || item.fullDescription.toLowerCase().includes(searchLower)
      || item.tag.toLowerCase().includes(searchLower);

    return matchCategory && matchSearch;
  });

  // อัปเดตจำนวนผลลัพธ์
  const resultCounter = document.getElementById('result-count');
  if (resultCounter) {
    resultCounter.textContent = `${filteredData.length} จาก 7 สถานที่`;
  }

  // กรณีไม่พบข้อมูล
  if (filteredData.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-3xl border border-dashed border-slate-300 p-8 shadow-sm">
        <div class="w-16 h-16 mx-auto mb-4 bg-sky-50 text-sky-500 rounded-full flex items-center justify-center text-2xl">
          🔍
        </div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">ไม่พบสถานที่ท่องเที่ยวที่ตรงกับการค้นหา</h3>
        <p class="text-slate-500 mb-6 max-w-md mx-auto">
          ลองเปลี่ยนคำค้นหา หรือเลือกหมวดหมู่อื่นเพื่อค้นพบเสน่ห์ของอำเภอท่าวุ้ง
        </p>
        <button onclick="resetFilters()" class="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-xl transition shadow-md hover:shadow-lg inline-flex items-center gap-2">
          <span>แสดงทั้งหมด</span>
        </button>
      </div>
    `;
    return;
  }

  // สร้างการ์ด HTML
  container.innerHTML = filteredData.map(item => {
    const isBookmarked = savedBookmarks.includes(item.id);
    const categoryBadgeColor = getCategoryColor(item.category);

    return `
      <article class="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1.5" data-id="${item.id}">
        <!-- พื้นที่แสดงรูปภาพขนาดใหญ่ด้านบน -->
        <div class="relative w-full h-64 overflow-hidden bg-slate-100">
          <img 
            src="${item.image}" 
            alt="${item.imageAlt}" 
            loading="lazy"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80';"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>

          <!-- ลำดับตัวเลข Badge -->
          <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-800 font-extrabold text-sm px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/40">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>#${String(item.id).padStart(2, '0')}</span>
          </div>

          <!-- ปุ่ม Bookmark ที่ชอบ -->
          <button 
            onclick="toggleBookmark(${item.id}, event)" 
            aria-label="บันทึกสถานที่" 
            class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-md text-slate-700 hover:text-rose-500 shadow-md flex items-center justify-center transition-all duration-200 transform active:scale-90"
          >
            <svg class="w-5 h-5 ${isBookmarked ? 'fill-rose-500 text-rose-500' : 'text-slate-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>

          <!-- หมวดหมู่และพิกัดบนรูป -->
          <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
            <span class="text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-md ${categoryBadgeColor}">
              ${item.categoryLabel}
            </span>
            <div class="flex items-center gap-1 text-xs font-medium text-amber-300 bg-slate-900/60 backdrop-blur-sm px-2 py-0.5 rounded-md">
              <span>★</span>
              <span>${item.rating}</span>
            </div>
          </div>
        </div>

        <!-- เนื้อหาภายในการ์ด (จัดระเบียบข้อความให้อ่านง่าย สบายตา) -->
        <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
          <div>
            <!-- หัวข้อชื่อสถานที่ -->
            <h3 class="font-display text-xl sm:text-[22px] font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug mb-2 line-clamp-1">
              ${item.title}
            </h3>
            
            <!-- ป้ายชื่อเดิม / ประวัติย่อ (อ่านง่าย ไม่จม) -->
            <div class="mb-3.5">
              <span class="inline-flex items-center gap-1.5 text-xs font-medium text-sky-800 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100 max-w-full">
                <span class="text-sky-600 font-bold shrink-0">📜</span>
                <span class="truncate">${item.originalName}</span>
              </span>
            </div>

            <!-- คำบรรยายสรุปจุดเด่น (ฟอนต์ Sarabun อ่านสบายตา เว้นระยะบรรทัดพอดี) -->
            <p class="font-body text-slate-600 text-sm sm:text-[15px] leading-[1.8] mb-4 line-clamp-3 text-left">
              ${item.shortExcerpt}
            </p>

            <!-- กล่องสรุปไฮไลต์สำคัญประจำสถานที่ -->
            <div class="p-3 rounded-2xl bg-slate-50 border border-slate-100 mb-5 flex items-start gap-2.5">
              <span class="text-amber-500 text-sm font-bold shrink-0 mt-0.5">✨</span>
              <p class="font-body text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed line-clamp-2">
                <span class="font-semibold text-slate-900 font-display">ไฮไลต์:</span> ${item.highlights[0]}
              </p>
            </div>

            <!-- ป้ายข้อมูลย่อ (พิกัด & เวลาแนะนำ) -->
            <div class="flex flex-wrap items-center gap-2 mb-6">
              <span class="inline-flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-200/60 font-medium font-body">
                <span class="text-emerald-500">📍</span>
                <span class="truncate">${item.location}</span>
              </span>
              <span class="inline-flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-200/60 font-medium font-body">
                <span class="text-sky-500">⏰</span>
                <span>${item.recommendedTime.split('(')[0].trim()}</span>
              </span>
            </div>
          </div>

          <!-- แถบปุ่ม Action ท้ายการ์ด -->
          <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <!-- ปุ่มอ่านเพิ่มเติม เปิด Modal -->
            <button 
              onclick="openModal(${item.id})" 
              class="flex-1 py-2.5 px-4 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-medium text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-md"
            >
              <span>อ่านเพิ่มเติม</span>
              <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>

            <!-- ปุ่มแผนที่นำทางลัด -->
            <a 
              href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery)}" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="เปิดแผนที่ Google Maps"
              class="w-10 h-10 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 border border-slate-200 flex items-center justify-center transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
              </svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * กำหนดสี Badge ตามประเภท
 */
function getCategoryColor(category) {
  switch(category) {
    case 'temple':
      return 'bg-emerald-500/90 text-white';
    case 'landmark':
      return 'bg-rose-500/90 text-white';
    case 'community':
      return 'bg-amber-500/90 text-white';
    case 'history':
      return 'bg-sky-500/90 text-white';
    default:
      return 'bg-slate-700/90 text-white';
  }
}

/**
 * ตั้งค่าการสลับแท็บตัวกรอง
 */
function setupFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const filter = e.currentTarget.getAttribute('data-filter');
      currentFilter = filter;

      // จัดการ Active Class
      tabs.forEach(t => {
        t.classList.remove('bg-sky-600', 'text-white', 'shadow-md');
        t.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-50');
      });

      e.currentTarget.classList.add('bg-sky-600', 'text-white', 'shadow-md');
      e.currentTarget.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-50');

      renderAttractions();
    });
  });
}

/**
 * ตั้งค่าช่องค้นหา
 */
function setupSearchInput() {
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = searchQuery ? 'block' : 'none';
      }
      renderAttractions();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      renderAttractions();
    });
  }
}

/**
 * รีเซ็ตตัวกรองทั้งหมด
 */
function resetFilters() {
  currentFilter = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  const tabs = document.querySelectorAll('.filter-tab-btn');
  tabs.forEach(t => {
    if (t.getAttribute('data-filter') === 'all') {
      t.classList.add('bg-sky-600', 'text-white', 'shadow-md');
      t.classList.remove('bg-white', 'text-slate-600');
    } else {
      t.classList.remove('bg-sky-600', 'text-white', 'shadow-md');
      t.classList.add('bg-white', 'text-slate-600');
    }
  });

  renderAttractions();
}

/**
 * สลับการบันทึก Bookmark รายการที่ชอบ
 */
function toggleBookmark(id, event) {
  if (event) event.stopPropagation();

  const index = savedBookmarks.indexOf(id);
  if (index > -1) {
    savedBookmarks.splice(index, 1);
    showToast('ลบออกจากรายการบันทึกแล้ว');
  } else {
    savedBookmarks.push(id);
    showToast('บันทึกลงในรายการที่ชอบเรียบร้อย ✨');
  }

  localStorage.setItem('thawung_favorites', JSON.stringify(savedBookmarks));
  updateBookmarkCount();
  renderAttractions();
  renderBookmarkDrawerList();
}

/**
 * อัปเดตตัวเลขเคาน์เตอร์ Bookmark
 */
function updateBookmarkCount() {
  const badge = document.getElementById('bookmark-counter');
  if (badge) {
    badge.textContent = savedBookmarks.length;
    badge.style.display = savedBookmarks.length > 0 ? 'inline-flex' : 'none';
  }
}

/**
 * เปิดหน้าต่าง Modal แสดงรายละเอียดครบถ้วน
 */
function openModal(id) {
  const item = ATTRACTIONS_DATA.find(a => a.id === id);
  if (!item) return;

  const modal = document.getElementById('detail-modal');
  const modalContent = document.getElementById('modal-dynamic-content');
  const isBookmarked = savedBookmarks.includes(item.id);

  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <!-- ส่วนหัวรูปภาพของ Modal -->
    <div class="relative h-72 sm:h-80 md:h-96 w-full bg-slate-900">
      <img 
        src="${item.image}" 
        alt="${item.imageAlt}" 
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>

      <!-- ปุ่มปิด Modal (มุมขวาบน) -->
      <button 
        onclick="closeModal()" 
        class="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center transition shadow-lg hover:scale-105 z-10"
        aria-label="ปิดหน้าต่าง"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- ข้อมูลบนรูปภาพ -->
      <div class="absolute bottom-6 left-6 right-6 text-white">
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span class="px-3 py-1 text-xs font-bold rounded-lg ${getCategoryColor(item.category)} shadow-sm">
            ${item.categoryLabel}
          </span>
          <span class="px-3 py-1 text-xs font-medium rounded-lg bg-white/20 backdrop-blur-md text-white">
            📍 ${item.location}
          </span>
          <span class="px-3 py-1 text-xs font-medium rounded-lg bg-amber-400/20 backdrop-blur-md text-amber-300">
            ★ คะแนนความนิยม ${item.rating} (${item.reviewCount} รีวิว)
          </span>
        </div>
        
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white drop-shadow-md">
          ${item.title}
        </h2>
        <p class="text-sky-200 text-sm mt-1 drop-shadow-sm font-medium">
          ${item.originalName}
        </p>
      </div>
    </div>

    <!-- ส่วนเนื้อหาของ Modal -->
    <div class="p-6 sm:p-8 space-y-8 bg-white">
      
      <!-- คำบรรยายรายละเอียดตามข้อมูลโจทย์ -->
      <div class="bg-gradient-to-br from-sky-50/60 to-emerald-50/40 p-6 rounded-2xl border border-sky-100 shadow-inner">
        <h3 class="text-xs font-bold uppercase tracking-wider text-sky-800 mb-2 flex items-center gap-2">
          <svg class="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          ข้อมูลและประวัติความเป็นมา
        </h3>
        <p class="font-body text-slate-700 leading-[1.85] text-base sm:text-[17px] font-normal text-left tracking-normal">
          ${item.fullDescription}
        </p>
      </div>

      <!-- ไฮไลต์ที่ไม่ควรพลาด -->
      <div>
        <h3 class="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-black">
            ✨
          </span>
          ไฮไลต์และสิ่งที่ไม่ควรพลาด
        </h3>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${item.highlights.map(hl => `
            <li class="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 text-sm">
              <svg class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>${hl}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- ข้อมูลสำคัญสำหรับนักเดินทาง -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100">
          <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">ระยะทาง / การเดินทาง</div>
          <div class="text-sm font-semibold text-slate-800 flex items-center gap-2">
            <span>🚗</span>
            <span>${item.distance}</span>
          </div>
        </div>
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100">
          <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">ช่วงเวลาแนะนำ</div>
          <div class="text-sm font-semibold text-slate-800 flex items-center gap-2">
            <span>⏰</span>
            <span>${item.recommendedTime}</span>
          </div>
        </div>
      </div>

      <!-- คำแนะนำเพิ่มเติม (Tips) -->
      <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-start gap-3">
        <span class="text-lg">💡</span>
        <div>
          <span class="font-bold">เคล็ดลับการท่องเที่ยว:</span> ${item.tips}
        </div>
      </div>

      <!-- ปุ่มดำเนินการท้าย Modal -->
      <div class="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <!-- บันทึกสถานที่ -->
          <button 
            onclick="toggleBookmark(${item.id}); openModal(${item.id});" 
            class="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm flex items-center gap-2 transition"
          >
            <svg class="w-4 h-4 ${isBookmarked ? 'fill-rose-500 text-rose-500' : 'text-slate-500'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <span>${isBookmarked ? 'บันทึกแล้ว' : 'บันทึกทริปนี้'}</span>
          </button>

          <!-- ปุ่มแชร์ -->
          <button 
            onclick="sharePlace('${item.title}')" 
            class="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm flex items-center gap-2 transition"
          >
            <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
            <span>แชร์</span>
          </button>
        </div>

        <div class="flex items-center gap-2">
          <!-- เปิด Google Maps -->
          <a 
            href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery)}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl transition shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <span>เปิด Google Maps นำทาง</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `;

  // แสดง Modal พร้อม Animation
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // ป้องกันการเลื่อนพื้นหลัง
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    const container = modal.querySelector('.modal-container');
    if (container) {
      container.classList.remove('scale-95');
      container.classList.add('scale-100');
    }
  }, 10);
}

/**
 * ปิดหน้าต่าง Modal
 */
function closeModal() {
  const modal = document.getElementById('detail-modal');
  if (!modal) return;

  const container = modal.querySelector('.modal-container');
  if (container) {
    container.classList.remove('scale-100');
    container.classList.add('scale-95');
  }
  modal.classList.add('opacity-0');

  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }, 250);
}

/**
 * ตั้งค่า Event สำหรับ Modal
 */
function setupModalEvents() {
  const modal = document.getElementById('detail-modal');
  if (modal) {
    // ปิดเมื่อคลิกพื้นหลังสีดำ
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
        closeModal();
      }
    });
  }

  // ปิดเมื่อกดปุ่ม ESC บนคีย์บอร์ด
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeBookmarkDrawer();
    }
  });
}

/**
 * ลิ้นชัก Bookmark Favorites Drawer
 */
function setupBookmarkDrawer() {
  const openBtn = document.getElementById('bookmark-toggle-btn');
  const closeBtn = document.getElementById('close-drawer-btn');
  const drawer = document.getElementById('bookmark-drawer');
  const overlay = document.getElementById('drawer-overlay');

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      openBookmarkDrawer();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeBookmarkDrawer);
  }

  if (overlay) {
    overlay.addEventListener('click', closeBookmarkDrawer);
  }
}

function openBookmarkDrawer() {
  const drawer = document.getElementById('bookmark-drawer');
  const overlay = document.getElementById('drawer-overlay');
  renderBookmarkDrawerList();

  if (drawer && overlay) {
    overlay.classList.remove('hidden');
    drawer.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
  }
}

function closeBookmarkDrawer() {
  const drawer = document.getElementById('bookmark-drawer');
  const overlay = document.getElementById('drawer-overlay');

  if (drawer && overlay) {
    drawer.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function renderBookmarkDrawerList() {
  const container = document.getElementById('drawer-bookmark-list');
  if (!container) return;

  if (savedBookmarks.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-slate-400">
        <div class="text-4xl mb-3">📍</div>
        <p class="font-medium text-slate-600">ยังไม่มีสถานที่ที่คุณบันทึกไว้</p>
        <p class="text-xs text-slate-400 mt-1">กดที่ไอคอนหัวใจบนการ์ด เพื่อบันทึกทริปที่คุณอยากไป</p>
      </div>
    `;
    return;
  }

  const items = ATTRACTIONS_DATA.filter(a => savedBookmarks.includes(a.id));
  container.innerHTML = items.map(item => `
    <div class="p-3 bg-slate-50 hover:bg-sky-50/50 rounded-2xl border border-slate-100 flex items-center gap-3 transition">
      <img src="${item.image}" alt="${item.title}" class="w-16 h-16 rounded-xl object-cover shrink-0" />
      <div class="flex-1 min-w-0">
        <h4 class="font-bold text-sm text-slate-800 truncate">${item.title}</h4>
        <p class="text-xs text-slate-500 truncate">${item.location}</p>
        <button onclick="openModal(${item.id}); closeBookmarkDrawer();" class="text-xs font-semibold text-sky-600 hover:text-sky-700 mt-1 inline-block">
          ดูรายละเอียด →
        </button>
      </div>
      <button onclick="toggleBookmark(${item.id})" class="p-2 text-rose-500 hover:bg-white rounded-lg transition" title="ลบออก">
        <svg class="w-5 h-5 fill-rose-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  `).join('');
}

/**
 * ฟังก์ชันแชร์สถานที่
 */
function sharePlace(title) {
  if (navigator.share) {
    navigator.share({
      title: `${title} - 7 สถานที่ท่องเที่ยวอำเภอท่าวุ้ง ลพบุรี`,
      text: `แนะนำไปเที่ยว "${title}" อำเภอท่าวุ้ง จังหวัดลพบุรี! สวยงามและทรงคุณค่ามาก`,
      url: window.location.href,
    }).catch(() => {});
  } else {
    // Copy URL to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('คัดลอกลิงก์ไปยังคลิปบอร์ดแล้ว!');
    });
  }
}

/**
 * Toast Notification แจ้งเตือนข้อความ
 */
function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-slate-900/90 backdrop-blur-md text-white text-sm font-medium px-5 py-3 rounded-2xl shadow-2xl transform translate-y-10 opacity-0 transition-all duration-300 flex items-center gap-2 border border-white/10';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
    <span>${message}</span>
  `;

  toast.classList.remove('translate-y-10', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 2600);
}

/**
 * จัดการ Header Scroll Effect
 */
function setupScrollEffects() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
      navbar.classList.remove('bg-transparent', 'py-5');
    } else {
      navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
      navbar.classList.add('bg-transparent', 'py-5');
    }
  });
}
