// 移动端适配方案 viewport+rem
export const viewInit = function (width = 750) {
    const $root = document.documentElement;
    const $meta = document.querySelector('meta[name="viewport"]');
    const docWidth = $root.clientWidth;
    const scale = docWidth / width;
    // 设置根元素大小100px rem布局
    $root.style.fontSize = `${scale*100}px`
    // 设置viewport视口
    $meta.setAttribute('content', `width=   ${width},initial-scale=${scale},minimum-scale=${scale},maximum-scale=${scale}`)
}