let id1=0
const HtmlElement=function(type,textContent){

this.type=type
this.textContent=textContent
this.id=id1
id1=id1+1
}  

HtmlElement.prototype.render=function() {
   const elemnt=document.createElement(this.type)
   elemnt.textContent=this.textContent
   elemnt.id="ele"+this.id
   document.body.appendChild(elemnt);
}
const ImageElement=function(src,alt){
    HtmlElement.call(this,"img",src)
this.alt=alt
}

ImageElement.prototype = Object.create(HtmlElement.prototype); 
ImageElement.prototype.constructor = ImageElement;

ImageElement.prototype.render = function () {
    const imgElement = document.createElement(this.type);
    imgElement.src = this.src;
    imgElement.alt = this.alt;
    imgElement.id = "ele" + this.id;
    imgElement.width = 200; // דוגמה לעיצוב
    imgElement.height = 150; // דוגמה לעיצוב
    document.body.appendChild(imgElement);
};

const SelectElement = function (arr) {
    this.arr = arr; 
    HtmlElement.call(this, "select", ""); 
}
SelectElement.prototype = Object.create(HtmlElement.prototype);
SelectElement.prototype.constructor = SelectElement;

SelectElement.prototype.render = function () {
    const SelectElement1 = document.createElement(this.type);
    SelectElement1.id = "ele" + this.id;

    this.arr.forEach(optionText => {
        const option = document.createElement("option");
        option.textContent = optionText;
        SelectElement1.appendChild(option);
    });

    document.body.appendChild(SelectElement1);
};
function CreateElemnt() {
 new HtmlElement(document.getElementById("elementType").value,document.getElementById("elementText").value ).render()
}

function CreateImg() {
    new ImageElement(document.getElementById("imageSrc").value,document.getElementById("imageAlt").value ).render()
}

function CreateSelect() {
    const options = document.getElementById("selectOptions").value.split(",");
    new SelectElement(options).render();}


