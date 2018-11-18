function Water() {
    this.animationsManager = new AnimationsManager();

    this.mount = function() {
        window.addEventListener("scroll", handleScroll);
        // call handle scroll once
        handleScroll();
    }
    this.unmount = function() {
        window.removeEventListener("scroll", handleScroll);
    }

    let targetMap = [];
    let object = this;

    function handleScroll(event) {
        // return list of items to animatable for animating
        // temporarily, return everything (optimizations to be made)
        object.animationsManager.updateAnimationsFor(targetMap);
    }

    this.add = function(elementName, query) {
        this.animationsManager.animatables[elementName] = query;        
        targetMap.push(elementName);
        // return this for chaining
        return this;
    }
}

function AnimationsManager() {
    this.animatables = {}

    this.updateAnimationsFor = function(targetMap) {
        for (let target of targetMap) {
            let animatable = this.animatables[target];
            let element = this.animatables[target].target;

            let max = element.offsetTop;
            let min = max - window.innerHeight;
            min = min < 0 ? 0 : min;

            let percentage = (window.pageYOffset - min) / ((max-min) + element.offsetHeight);

            element.style.transform = ""
            for (keyframe in animatable.keyframes) {
                if (animatable.keyframes[keyframe].length == 2) {
                    let start = animatable.keyframes[keyframe][0];
                    let end = animatable.keyframes[keyframe][1];
                    this.updateKeyframe(element, keyframe, start, end, percentage);
                }
            }
        }
    }

    this.updateKeyframe = function(element, keyframe, start, end, percentage) {
        let extension = "";
        if (isNaN(start)) {
            extension = getValueExtension(start);
            if (extension == "err") return new ErrorEvent("Extension Error");
            start = parseInt(start.slice(0, -extension.length));
        }
        if (isNaN(end)) {
            extension = getValueExtension(end);
            if (extension == "err") return new ErrorEvent("Extension Error");
            end = parseInt(end.slice(0, -extension.length));
        }
        if (percentage > 1) percentage = 1;
        if (percentage < 0) percentage = 0;
        let percentValue = (end - start) * percentage + start;
        

        if (keyframe === "opacity") {
            element.style.opacity=percentValue;
        }

        let transformations = [
            "rotate", "rotateX", "rotateY", "translateX", "translateY", "scaleX", "scaleY"
        ]
        for (transform of transformations) {
            if (keyframe === transform) {
                element.style.transform += keyframe + "(" + percentValue + (extension ? extension + ")" : "px) ");
            }
        }
    }
    let getValueExtension = function(value) {
        let ending = "";
        if (value.length == 0) return "Err";
        for (let i = value.length - 1; i >= 0; i--) {
            if (value.charCodeAt(i) < 48 || value.charCodeAt(i) > 57) {
                if (i < value.length - 3) return "Err";
                ending = value[i] + ending;
            }
        }
        return ending;
    }
}