var attractions = [
    {
        id: 1,
        name: '万里长城',
        city: '北京',
        rating: 4.9,
        price: 280,
        category: 'cultural',
        categoryName: '人文古迹',
        visitors: '1000万+',
        openTime: '8:00-18:00',
        description: '万里长城是中国古代的军事防御工程，是世界文化遗产之一。它始建于春秋战国时期，历经秦、汉、明等多个朝代的修建和扩建，总长超过2万公里。长城以其雄伟壮观的建筑和深厚的历史文化内涵，吸引着来自世界各地的游客。登上长城，可以俯瞰群山，感受历史的厚重与沧桑。',
        image: 'img/01-长城.jpg',
        tips: ['建议早上去，避开人流高峰', '穿舒适的运动鞋，台阶较陡', '可以自带水和小零食', '拍照时注意安全，不要攀爬城墙'],
        traffic: ['公交：德胜门坐877路直达', '地铁：2号线积水潭站下车步行至德胜门', '自驾：京藏高速G6水关长城出口'],
        banner: true
    },
    {
        id: 2,
        name: '故宫博物院',
        city: '北京',
        rating: 4.9,
        price: 60,
        category: 'cultural',
        categoryName: '人文古迹',
        visitors: '800万+',
        openTime: '8:30-17:00',
        description: '故宫博物院位于北京市中心，是明清两代的皇家宫殿，也是世界上现存规模最大、保存最为完整的木质结构古建筑群。故宫占地面积72万平方米，拥有殿宇宫室9000余间，珍藏文物180余万件。这里曾是24位皇帝的居所，见证了中国近六百年的历史变迁。',
        image: 'img/02-故宫.jpg',
        tips: ['提前在网上预约门票', '建议游览时间3-4小时', '珍宝馆和钟表馆需单独购票', '太和殿等大殿周一闭馆'],
        traffic: ['地铁：1号线天安门东站或西站', '公交：1、2、52路天安门东站', '注意：午门是唯一入口'],
        banner: true
    },
    {
        id: 3,
        name: '杭州西湖',
        city: '杭州',
        rating: 4.8,
        price: 0,
        category: 'natural',
        categoryName: '自然风光',
        visitors: '2000万+',
        openTime: '全天开放',
        description: '杭州西湖是中国著名的风景名胜区，以其秀丽的湖光山色和深厚的人文底蕴闻名于世。西湖三面环山，面积约6.39平方公里，有断桥残雪、苏堤春晓、平湖秋月等十景。西湖不仅是自然美景的代表，更是中国文化的象征，无数文人墨客在此留下了千古名篇。',
        image: 'img/03-西湖.jpg',
        tips: ['建议租自行车环湖游览', '西湖音乐喷泉值得一看', '节假日游客较多，注意错峰', '周边美食推荐：西湖醋鱼、龙井虾仁'],
        traffic: ['地铁：1号线龙翔桥站', '公交：Y2、Y9路环湖线', '游船：可在湖滨码头购票'],
        banner: true
    },
    {
        id: 4,
        name: '桂林山水',
        city: '桂林',
        rating: 4.8,
        price: 200,
        category: 'natural',
        categoryName: '自然风光',
        visitors: '1500万+',
        openTime: '8:00-18:00',
        description: '桂林山水甲天下，这里以漓江风光和喀斯特地貌为特色，是中国最美的自然景观之一。漓江两岸奇峰罗列、碧水环绕，乘船游览可以欣赏到九马画山、黄布倒影等著名景点。桂林的山水不仅是自然奇观，更是中国山水画的灵感源泉。',
        image: 'img/04-桂林.jpg',
        tips: ['漓江游船建议选四星船', '阳朔西街夜景很热闹', '遇龙河竹筏漂流值得体验', '最佳游览季节是4-10月'],
        traffic: ['飞机：桂林两江国际机场', '高铁：桂林北站或西站', '漓江游船：在磨盘山码头登船'],
        banner: false
    },
    {
        id: 5,
        name: '兵马俑',
        city: '西安',
        rating: 4.9,
        price: 150,
        category: 'cultural',
        categoryName: '人文古迹',
        visitors: '600万+',
        openTime: '8:30-18:00',
        description: '秦始皇兵马俑是世界第八大奇迹，位于西安市临潼区。这是秦始皇陵的陪葬坑，出土了数千件栩栩如生的陶俑和陶马，展现了秦朝强大的军事力量和高超的雕塑艺术。兵马俑不仅是中国古代文明的瑰宝，也是世界考古史上的重大发现。',
        image: 'img/05-兵马俑.jpg',
        tips: ['请专业讲解员讲解更有收获', '一号坑规模最大，最为壮观', '建议先看电影再参观', '周边还有华清池可以一并游览'],
        traffic: ['公交：游5路从西安火车站出发', '地铁：9号线华清池站下车', '自驾：连霍高速兵马俑出口'],
        banner: false
    },
    {
        id: 14,
        name: '天坛公园',
        city: '北京',
        rating: 4.8,
        price: 35,
        category: 'cultural',
        categoryName: '人文古迹',
        visitors: '500万+',
        openTime: '6:00-22:00',
        description: '天坛公园位于北京市东城区，是明清两代皇帝祭天祈谷的场所，也是世界文化遗产。天坛以其宏伟的建筑和精湛的工艺闻名于世，祈年殿、皇穹宇、圜丘坛等建筑是中国古代建筑艺术的杰作。天坛不仅是宗教祭祀的场所，更是中国传统文化的重要象征。',
        image: 'img/14-天坛.jpg',
        tips: ['祈年殿内部非常震撼', '建议早上晨练时去，人少', '回音壁可以体验声学奇观', '周边有红桥市场可以逛逛'],
        traffic: ['地铁：5号线天坛东门站', '公交：6、34路天坛站', '南门有停车场'],
        banner: false
    },
    {
        id: 6,
        name: '三亚海滩',
        city: '三亚',
        rating: 4.7,
        price: 100,
        category: 'coastal',
        categoryName: '海滨度假',
        visitors: '2000万+',
        openTime: '全天开放',
        description: '三亚是中国最南端的热带海滨城市，拥有中国最美的海滩。亚龙湾、天涯海角、蜈支洲岛等景点吸引着无数游客前来度假。这里阳光充足、海水清澈、沙滩细腻，是度假休闲的理想之地。三亚不仅有美丽的自然风光，还有丰富的海鲜美食和热带水果。',
        image: 'img/06-三亚.jpg',
        tips: ['注意做好防晒措施', '海鲜建议去第一市场购买后加工', '蜈支洲岛建议住一晚', '最佳旅游季节是10月-次年3月'],
        traffic: ['飞机：三亚凤凰国际机场', '高铁：三亚站或凤凰机场站', '公交：旅游专线覆盖各大景点'],
        banner: false
    },
    {
        id: 7,
        name: '上海外滩',
        city: '上海',
        rating: 4.8,
        price: 0,
        category: 'city',
        categoryName: '城市风光',
        visitors: '3000万+',
        openTime: '全天开放',
        description: '上海外滩是上海最具标志性的景点之一，位于黄浦江畔。这里可以欣赏到浦东陆家嘴的现代化摩天大楼群，包括东方明珠、上海中心大厦等。外滩的万国建筑博览群则展现了上海的历史变迁，是中西文化交融的见证。夜晚的外滩灯火辉煌，美不胜收。',
        image: 'img/07-外滩.jpg',
        tips: ['夜景比白天更漂亮', '建议从南京东路步行至外滩', '外滩观光隧道可以体验', '节假日人非常多，注意安全'],
        traffic: ['地铁：2号线南京东路站', '公交：20、37路外滩站', '轮渡：从浦东陆家嘴可以坐渡轮过来'],
        banner: false
    },
    {
        id: 11,
        name: '东方明珠',
        city: '上海',
        rating: 4.7,
        price: 199,
        category: 'city',
        categoryName: '城市风光',
        visitors: '500万+',
        openTime: '8:00-22:00',
        description: '东方明珠广播电视塔位于上海浦东陆家嘴，是上海的标志性建筑之一。塔高468米，是亚洲第一、世界第三高塔。登上东方明珠，可以俯瞰上海全景，感受这座国际化大都市的繁华与魅力。',
        image: 'img/11-东方明珠.jpg',
        tips: ['建议傍晚去，可以看日落和夜景', '旋转餐厅值得体验', '排队时间较长，建议提前预约', '拍照最佳位置在对岸外滩'],
        traffic: ['地铁：2号线陆家嘴站', '公交：81、82路陆家嘴环路站', '轮渡：从外滩坐渡轮到陆家嘴'],
        banner: false
    },
    {
        id: 13,
        name: '上海迪士尼',
        city: '上海',
        rating: 4.8,
        price: 499,
        category: 'city',
        categoryName: '城市风光',
        visitors: '1000万+',
        openTime: '9:00-21:00',
        description: '上海迪士尼乐园是中国大陆第一座迪士尼主题乐园，位于上海市浦东新区。这里有奇幻童话城堡、明日世界、宝藏湾等七大主题园区，还有精彩的花车巡游和烟花表演。无论是大人还是孩子，都能在这里找到属于自己的童话世界。',
        image: 'img/13-迪士尼.jpg',
        tips: ['建议提前下载官方APP', '热门项目可以拿快速通行证', '花车巡游提前占好位置', '烟花表演非常值得一看'],
        traffic: ['地铁：11号线迪士尼站', '公交：浦东50、51路迪士尼站', '乐园有免费停车场'],
        banner: false
    },
    {
        id: 8,
        name: '张家界',
        city: '张家界',
        rating: 4.8,
        price: 225,
        category: 'natural',
        categoryName: '自然风光',
        visitors: '800万+',
        openTime: '7:00-18:00',
        description: '张家界武陵源风景名胜区以其独特的石英砂岩峰林地貌闻名于世，是世界自然遗产。这里奇峰三千、秀水八百，电影《阿凡达》中的悬浮山就是以这里为原型。张家界的自然风光壮丽神奇，玻璃桥、天门洞等景点更是吸引了无数游客前来挑战。',
        image: 'img/08-张家界.jpg',
        tips: ['建议游玩2-3天', '百龙天梯可以节省体力', '山上气温较低，带件外套', '玻璃桥需要提前预约'],
        traffic: ['飞机：张家界荷花国际机场', '火车：张家界站', '景区内有环保车可以乘坐'],
        banner: false
    },
    {
        id: 9,
        name: '九寨沟',
        city: '阿坝',
        rating: 4.9,
        price: 280,
        category: 'natural',
        categoryName: '自然风光',
        visitors: '500万+',
        openTime: '8:00-17:00',
        description: '九寨沟位于四川省阿坝州，是中国最美的自然保护区之一。这里有碧绿的湖水、飞流的瀑布、多彩的森林，被誉为"童话世界"。九寨沟的水是其最大的特色，五花海、长海、诺日朗瀑布等景点令人叹为观止。秋天的九寨沟更是色彩斑斓，美不胜收。',
        image: 'img/09-九寨沟.jpg',
        tips: ['景区较大，建议乘观光车', '海拔较高，注意高原反应', '最佳季节是秋季（10月）', '五花海是必看景点'],
        traffic: ['飞机：九黄机场', '大巴：成都茶店子车站有直达班车', '景区内有观光车循环运行'],
        banner: false
    },
    {
        id: 10,
        name: '鼓浪屿',
        city: '厦门',
        rating: 4.7,
        price: 35,
        category: 'coastal',
        categoryName: '海滨度假',
        visitors: '1000万+',
        openTime: '全天开放',
        description: '鼓浪屿是厦门市的一个小岛，是世界文化遗产。这里有众多的欧式建筑、幽静的小巷和美丽的海滩。鼓浪屿没有机动车，只能步行，是一个非常适合慢游的地方。岛上的日光岩可以俯瞰全岛美景，菽庄花园则展现了江南园林的雅致。',
        image: 'img/10-鼓浪屿.jpg',
        tips: ['需要提前预约船票', '建议住一晚感受夜景', '岛上美食推荐：张三疯奶茶、沈家肠粉', '日光岩早上早点去人少'],
        traffic: ['轮渡：从厦门轮渡码头乘船', '地铁：1号线镇海路站步行至轮渡码头', '注意：外地游客需从东渡码头乘船'],
        banner: false
    }
];

var favorites = [];

document.addEventListener('DOMContentLoaded', function () {
    initCarousel();
    initNavbarScroll();
    initBackTop();
    initFeatured();
    initExplorePage();
    initDetailPage();
    initFavoritePage();
    initCategoryClick();
});

function initCarousel() {
    var slides = document.getElementById('slides');
    if (!slides) return;

    var currentSlide = 0;
    var slideList = slides.querySelectorAll('.slide');
    var slideCount = slideList.length;
    var indicators = document.querySelectorAll('#indicators .indicator');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');

    function goToSlide(index) {
        currentSlide = (index + slideCount) % slideCount;
        slides.style.transform = 'translateX(-' + currentSlide * 100 + '%)';
        indicators.forEach(function (ind, i) {
            if (i === currentSlide) {
                ind.classList.add('active');
            } else {
                ind.classList.remove('active');
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            goToSlide(currentSlide + 1);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            goToSlide(currentSlide - 1);
        });
    }

    indicators.forEach(function (ind, i) {
        ind.addEventListener('click', function () {
            goToSlide(i);
        });
    });

    setInterval(function () {
        goToSlide(currentSlide + 1);
    }, 5000);
}

function initNavbarScroll() {
    var header = document.getElementById('main-header');
    if (!header) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initBackTop() {
    var backTop = document.getElementById('backTop');
    if (!backTop) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backTop.classList.add('show');
        } else {
            backTop.classList.remove('show');
        }
    });

    backTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initFeatured() {
    var grid = document.getElementById('featuredGrid');
    if (!grid) return;

    var featuredItems = attractions.slice(0, 6);

    featuredItems.forEach(function (item) {
        var card = document.createElement('div');
        card.className = 'featured-card';
        card.onclick = function () { goToDetail(item.id); };
        card.innerHTML = '<img src="' + item.image + '" alt="' + item.name + '">' +
            '<div class="card-info">' +
            '<div class="card-header">' +
            '<span class="card-city">' + item.city + '</span>' +
            '<span class="card-rating">★ ' + item.rating + '</span>' +
            '</div>' +
            '<h3>' + item.name + '</h3>' +
            '<p>' + item.description.substring(0, 80) + '...</p>' +
            '<div class="card-footer">' +
            '<span class="card-price">' + (item.price === 0 ? '免费' : '¥' + item.price + '<span>起</span>') + '</span>' +
            '<button class="card-btn">查看详情</button>' +
            '</div>' +
            '</div>';
        grid.appendChild(card);
    });
}

function initCategoryClick() {
    var categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(function (card) {
        card.addEventListener('click', function () {
            var category = this.dataset.category;
            window.location.href = 'pages/explore.html?category=' + category;
        });
    });
}

function goToDetail(id) {
    var isIndex = window.location.pathname.endsWith('index.html') ||
        window.location.pathname === '/' ||
        window.location.pathname === '';
    var path = isIndex ? 'pages/detail.html' : 'detail.html';
    window.location.href = path + '?id=' + id;
}

function initExplorePage() {
    var list = document.getElementById('exploreList');
    if (!list) return;

    function renderItems(data) {
        list.innerHTML = '';

        if (data.length === 0) {
            list.innerHTML = '<div class="empty-message" style="text-align:center; padding:40px; background:#fff; border-radius:12px;">没有找到匹配的景点</div>';
            return;
        }

        if (data.length % 2 !== 0) {
            data = data.slice(0, -1);
        }

        data.forEach(function (item) {
            var isIndex = window.location.pathname.endsWith('index.html') ||
                window.location.pathname === '/' ||
                window.location.pathname === '';
            var path = isIndex ? 'pages/detail.html' : 'detail.html';

            var html = '<div class="explore-item" onclick="goToDetail(' + item.id + ')">' +
                '<img src="' + item.image + '" alt="' + item.name + '">' +
                '<div class="item-content">' +
                '<div class="item-header">' +
                '<span class="item-city">' + item.city + '</span>' +
                '<span class="item-rating">★ ' + item.rating + '</span>' +
                '</div>' +
                '<h3>' + item.name + '</h3>' +
                '<p>' + item.description.substring(0, 60) + '...</p>' +
                '<div class="item-footer">' +
                '<span class="item-price">' + (item.price === 0 ? '免费' : '¥' + item.price + '起') + '</span>' +
                '<a href="' + path + '?id=' + item.id + '" class="item-link">查看详情 ›</a>' +
                '</div>' +
                '</div>' +
                '</div>';
            list.innerHTML += html;
        });
    }

    renderItems(attractions);

    var filterTabs = document.querySelectorAll('.filter-tab');
    var priceSelect = document.getElementById('priceSelect');
    var searchBtn = document.getElementById('searchBtn');
    var searchInput = document.getElementById('searchInput');

    filterTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            filterTabs.forEach(function (t) { t.classList.remove('active'); });
            this.classList.add('active');
            applyFilters();
        });
    });

    if (priceSelect) {
        priceSelect.addEventListener('change', function () {
            applyFilters();
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', function () {
            applyFilters();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                applyFilters();
            }
        });
    }

    function applyFilters() {
        var activeTab = document.querySelector('.filter-tab.active');
        var category = activeTab ? activeTab.dataset.filter : 'all';
        var priceRange = priceSelect ? priceSelect.value : 'all';
        var keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';

        var filtered = attractions.filter(function (item) {
            var matchCategory = category === 'all' || item.category === category;

            var matchPrice = true;
            if (priceRange === 'free') {
                matchPrice = item.price === 0;
            } else if (priceRange === 'low') {
                matchPrice = item.price > 0 && item.price < 100;
            } else if (priceRange === 'medium') {
                matchPrice = item.price >= 100 && item.price <= 500;
            } else if (priceRange === 'high') {
                matchPrice = item.price > 500;
            }

            var matchKeyword = true;
            if (keyword) {
                matchKeyword = item.name.toLowerCase().indexOf(keyword) !== -1 ||
                    item.city.toLowerCase().indexOf(keyword) !== -1 ||
                    item.description.toLowerCase().indexOf(keyword) !== -1;
            }

            return matchCategory && matchPrice && matchKeyword;
        });

        renderItems(filtered);
    }

    var urlParams = new URLSearchParams(window.location.search);
    var categoryParam = urlParams.get('category');
    if (categoryParam) {
        var targetTab = document.querySelector('.filter-tab[data-filter="' + categoryParam + '"]');
        if (targetTab) {
            targetTab.click();
        }
    }
}

function initDetailPage() {
    var detailTitle = document.getElementById('detailTitle');
    if (!detailTitle) return;

    function getQueryParam(name) {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    var id = parseInt(getQueryParam('id')) || 1;
    var attraction = attractions.find(function (item) {
        return item.id === id;
    }) || attractions[0];

    var detailImage = document.getElementById('detailImage');
    var detailCity = document.getElementById('detailCity');
    var detailRating = document.getElementById('detailRating');
    var detailPrice = document.getElementById('detailPrice');
    var infoRating = document.getElementById('infoRating');
    var infoVisitors = document.getElementById('infoVisitors');
    var infoTime = document.getElementById('infoTime');
    var infoCategory = document.getElementById('infoCategory');
    var introContent = document.getElementById('introContent');

    if (detailImage) detailImage.src = attraction.image;
    if (detailTitle) detailTitle.textContent = attraction.name;
    if (detailCity) detailCity.textContent = attraction.city;
    if (detailRating) detailRating.textContent = attraction.rating;
    if (detailPrice) detailPrice.textContent = attraction.price === 0 ? '免费' : attraction.price;
    if (infoRating) infoRating.textContent = attraction.rating;
    if (infoVisitors) infoVisitors.textContent = attraction.visitors;
    if (infoTime) infoTime.textContent = attraction.openTime;
    if (infoCategory) infoCategory.textContent = attraction.categoryName;
    if (introContent) introContent.textContent = attraction.description;

    function renderList(listId, items) {
        var list = document.getElementById(listId);
        if (!list) return;
        list.innerHTML = '';
        items.forEach(function (item) {
            var li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
    }

    renderList('tipsList', attraction.tips);
    renderList('trafficList', attraction.traffic);

    var detailTabs = document.querySelectorAll('.detail-tab');
    detailTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            detailTabs.forEach(function (t) { t.classList.remove('active'); });
            this.classList.add('active');
            var tabId = this.dataset.tab;
            document.querySelectorAll('.tab-content').forEach(function (content) {
                content.classList.remove('active');
            });
            var targetTab = document.getElementById('tab-' + tabId);
            if (targetTab) targetTab.classList.add('active');
        });
    });

    var favoriteBtn = document.getElementById('favoriteBtn');
    if (favoriteBtn) {
        var isFavorited = favorites.some(function (f) {
            return f.id === attraction.id;
        });

        if (isFavorited) {
            favoriteBtn.classList.add('favorited');
            favoriteBtn.textContent = '♥';
        }

        favoriteBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (favoriteBtn.classList.contains('favorited')) {
                favorites = favorites.filter(function (f) {
                    return f.id !== attraction.id;
                });
                favoriteBtn.classList.remove('favorited');
                favoriteBtn.textContent = '♡';
                alert('已取消收藏');
            } else {
                favorites.push(attraction);
                favoriteBtn.classList.add('favorited');
                favoriteBtn.textContent = '♥';
                alert('收藏成功！');
            }
        });
    }
}

function initFavoritePage() {
    var grid = document.getElementById('favoriteGrid');
    if (!grid) return;

    function renderFavorites() {
        grid.innerHTML = '';

        if (favorites.length === 0) {
            grid.innerHTML = '<div class="empty-favorite">' +
                '<div class="icon">♡</div>' +
                '<h3>暂无收藏</h3>' +
                '<p>快去探索景点，收藏您喜欢的目的地吧！</p>' +
                '<a href="explore.html">去探索</a>' +
                '</div>';
            return;
        }

        favorites.forEach(function (item) {
            var card = document.createElement('div');
            card.className = 'favorite-card';
            card.innerHTML = '<img src="' + item.image + '" alt="' + item.name + '">' +
                '<div class="card-body">' +
                '<h3>' + item.name + '</h3>' +
                '<p>' + item.city + ' · ★ ' + item.rating + '</p>' +
                '<div class="card-footer">' +
                '<span class="card-price">' + (item.price === 0 ? '免费' : '¥' + item.price + '起') + '</span>' +
                '<button class="remove-btn" onclick="removeFavorite(' + item.id + ')">取消收藏</button>' +
                '</div>' +
                '</div>';
            grid.appendChild(card);
        });
    }

    renderFavorites();
}

function removeFavorite(id) {
    favorites = favorites.filter(function (item) {
        return item.id !== id;
    });
    initFavoritePage();
}