class Water {
    animationsManager = new AnimationsManager();

    mount = function() {
        window.addEventListener("scroll", handleScroll);
        // call handle scroll once
        handleScroll();
    }
    unmount = function() {
        window.removeEventListener("scroll", handleScroll);
    }

    handleScroll(event) {
        // return list of items to animatable for animating
        // temporarily, return everything (optimizations to be made)
        this.animationsManager.updateAnimationsFor(targetMap);
    }
    uniqIdCounter = 0;

    add = function(query) {
        let uniqId = uniqIdCounter++ + "" + Date.now();
        this.animationsManager.animatables[uniqId] = query;        
        targetMap.push(uniqId);
        // return this for chaining
        return this;
    }
}

exports.water = Water;

class AnimationsManager {
    animatables = {}

    updateAnimationsFor = function(targetMap) {
        for (let target of targetMap) {
            let animatable = this.animatables[target];
            let element = this.animatables[target].target;

            let max = element.offsetTop;
            let min = max - window.innerHeight;
            min = min < 0 ? 0 : min;
            max = max > (document.body.clientHeight - window.innerHeight) ? (document.body.clientHeight - window.innerHeight) : max;
            

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

    updateKeyframe = function(element, keyframe, start, end, percentage) {
        let extension = "";
        if (isNaN(start)) {
            extension = this.getValueExtension(start);
            if (extension == "err") return new ErrorEvent("Extension Error");
            start = parseInt(start.slice(0, -extension.length));
        }
        if (isNaN(end)) {
            extension = this.getValueExtension(end);
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
            "rotate", "rotateX", "rotateY", "translateX", "translateY", "scale", "scaleX", "scaleY"
        ]
        for (transform of transformations) {
            if (keyframe === transform) {
                let transformExt = extension;
                if (!transformExt && (keyframe === "translateX" || keyframe === "translateY")) transformExt = "px"
                element.style.transform += keyframe + "(" + percentValue + transformExt;
            }
        }
    }

    getValueExtension = function(value) {
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