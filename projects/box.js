//Fucking Javascript wont allow me to import JSON so imma do it right here
const books =
{
    "Books":[
        { 
            "Name":"PlaceholderJS1", 
            "Desc":"Random ass Text 2" ,
            "imgsrc":"../assets/placeholder.jpg"
        },
        { 
            "Name":"PlaceholderJS2", 
            "Desc":"Random ass Text 3" ,
            "imgsrc":"../assets/placeholder.jpg"
        },
        { 
            "Name":"Bocchi the rock", 
            "Desc":"manga fhuewgerrefhojnkfjeriofioforiefofjoie" ,
            "imgsrc":"../assets/placeholder.jpg"
        }
    ]
};

const length = books.Books.length;

for(let i=0; i<length; i++){
    var div = document.createElement("div");
    div.classList.add('flex-initial', 'box-border', 'border-[3px]', 'rounded-[32px]', 'border-black/40', 'w-[300px]',
     'h-[300px]', 'relative');
    var img = document.createElement("img");
    img.classList.add('w-[100%]','h-[50%]', 'rounded-t-[30px]');
    img.setAttribute('alt', books.Books[i].Name);
    img.setAttribute('src', books.Books[i].imgsrc);
    var innerdiv = document.createElement("div");
    innerdiv.classList.add('w-[100%]', 'h-[50%]', 'p-1', 'm-1');
    const textp1 = document.createTextNode(books.Books[i].Name);
    const textp2 = document.createTextNode(books.Books[i].Desc);
    const texta = document.createTextNode("> View");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var a = document.createElement("a");
    p1.classList.add('font-bold', 'text-[1.12rem]');
    p2.classList.add('font-normal', 'text-sm', 'overflow-hidden', 'w-[100%]', 'h-[60%]');  
    a.classList.add('hover:text-[110%]', 'hover:font-extrabold', 'hover:text-green-500', 'text-black', 'font-bold', 'duration-200', 'm-2', 'pr-1', 'right-0', 'bottom-0', 'absolute');  
    a.setAttribute('href', './name/placeholder');
    p1.appendChild(textp1);
    p2.appendChild(textp2);
    a.appendChild(texta);
    innerdiv.appendChild(p1);
    innerdiv.appendChild(p2);
    innerdiv.appendChild(a);
    div.appendChild(img);
    div.appendChild(innerdiv);
    document.getElementById("container").appendChild(div);
}