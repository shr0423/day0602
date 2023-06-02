/*다이어리에 사용되는 모든 박스의 최상위 객체 */
class Box {
    constructor(container, width, height, x, y, text, line, bg) {
        this.container = container;
        this.div;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.text = text;
        this.line = line;//라인색상
        this.bg = bg;


        //박스생성 및 스타일적용
        this.div = document.createElement("div");
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.border = "2px solid " + this.line;
        this.div.style.boxSizing = "border-box";

        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.innerText = this.text;
        this.div.style.background = this.bg;

        this.container.appendChild(this.div);
    }

    //태어난 후 text를 변경할 일이 있다면 아래의 메서드로
    //처리해보자
    setText(text) {
        this.text = text;
        this.div.innerText = this.text;

    }
}