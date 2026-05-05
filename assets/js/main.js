document.addEventListener('DOMContentLoaded', function() {
  // 锚点平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        history.pushState(null, null, targetId);
      }
    });
  });

  // 导航栏滚动动态效果
  const header = document.querySelector('.site-header');
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
  }, false);

  // 代码块一键复制
  const codeBlocks = document.querySelectorAll('pre');
  codeBlocks.forEach((block) => {
    const copyButton = document.createElement('button');
    copyButton.innerText = '复制代码';
    copyButton.className = 'copy-code-btn';
    copyButton.style.cssText = 'position:absolute;top:8px;right:8px;padding:4px 8px;font-size:12px;background:#2563eb;color:white;border:none;border-radius:4px;cursor:pointer;';
    block.style.position = 'relative';
    block.appendChild(copyButton);

    copyButton.addEventListener('click', async () => {
      const code = block.querySelector('code').innerText;
      await navigator.clipboard.writeText(code);
      copyButton.innerText = '复制成功';
      setTimeout(() => {
        copyButton.innerText = '复制代码';
      }, 2000);
    });
  });
});
