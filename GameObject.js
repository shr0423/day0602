/*게임에 등장하는 모든 객체들의 최상위 객체를 정의한다.
부모 클래스 일수록 보다 보편적인 특징들로 정의한다. 
*/
class GameObject {
    constructor(container, src, width, height, x, y, velX, velY) {
        this.container = container;
        this.img;
        this.src = src;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;

        //이미지 생성 및 속성
        this.img = document.createElement("img");
        this.img.src = this.src;
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";

        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        //이미지를 부모요소에 부착
        this.container.appendChild(this.img);

    }
    //현재 객체의 물리적 변화값 설정
    tick() {
        this.x += this.velX;
        this.y += this.velY;

    }
    //그 변화된 값을 이용하여 화면에 그래픽 처리(렌더링)
    render() {

        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

    }
}