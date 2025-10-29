// 应用数据 - 添加了序号属性，按照序号降序排序
const apps = [
    
    {
        id: 7,
        title: "页面集成展示",
        url: "https://page-integration-display.vercel.app/"
    },
    {
        id: 6,
        title: "菜谱搜索器",
        url: "https://menu-searcher-umber.vercel.app/"
    },
    {
        id: 5,
        title: "二次元猫娘互动助手",
        url: "https://vibe-coding-catgirl.vercel.app/"
    },
    {
        id: 4,
        title: "Quiz问答网站",
        url: "https://web-quit-vibe-coding.vercel.app/"
    },
    {
        id: 3,
        title: "安全密码生成器",
        url: "https://web-password-generator-vibe-coding.vercel.app/"
    },
    {
        id: 2,
        title: "待办事项清单",
        url: "https://web-todo-list-ecru.vercel.app/"
    },
    {
        id: 1,
        title: "用户注册页面",
        url: "https://web-class1.vercel.app/"
    }
].sort((a, b) => b.id - a.id); // 按序号降序排序，大的序号靠前

// 动态生成卡片
function generateCards() {
    const container = document.querySelector('.card-container');
    
    // 清空容器
    container.innerHTML = '';
    
    // 遍历应用数据，为每个应用创建卡片
    apps.forEach(app => {
        const card = document.createElement('div');
        card.className = 'app-card';
        
        // 设置卡片内容 - 使用iframe替代图片，按照用户提供的思路实现
        card.innerHTML = `
            <div class="iframe-wrapper">
                <iframe 
                    src="${app.url}" 
                    title="${app.title}" 
                    class="card-iframe" 
                    scrolling="no"
                    loading="lazy"
                ></iframe>
            </div>
            <h3 class="card-title">${app.title}</h3>
        `;
        
        // 添加点击事件，跳转到对应的应用页面
        card.addEventListener('click', () => {
            window.open(app.url, '_blank');
        });
        
        // 添加到容器
        container.appendChild(card);
    });
}

// 页面加载完成后生成卡片
document.addEventListener('DOMContentLoaded', generateCards);