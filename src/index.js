const observer = (classname) => {
    return { observer: new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting)
                    entry.target.classList.add(classname);
                    else{
                        entry.target.classList.remove(classname);
                    }
                })
            })
    }
}


const animHandler = (nodes,classname) => {
    
    return {nodes,...observer(classname),
        observe(){
            nodes.forEach((el) => {this.observer.observe(el)})
        }
    };
}
const headerHandler = animHandler(document.querySelectorAll('.hidden'),'anim');
headerHandler.observe();
const nodesRight = animHandler(document.querySelectorAll('.shiftleft'),'shift');
nodesRight.observe();
const nodesLeft = animHandler(document.querySelectorAll('.shiftright'),'shift');
nodesLeft.observe();
