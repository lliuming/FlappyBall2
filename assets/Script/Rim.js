cc.Class({
    extends: cc.Component,

    properties: {
        topRim: cc.Prefab,  //上篮筐
        bottomRim: cc.Prefab,    //下篮筐
        rims: [],        //篮筐
        nextRim: 550    //下一个篮筐的距离
    },

    /**
     * 初始化方法
     * @return {[type]} [description]
     */
    init: function() {

    },

    /**
     * 生产篮筐
     * @return {[type]} [description]
     */
    spwnRim: function() {
        for (var i = 10 - 1; i >= 0; i--) {
            let topRim;
            let bottomRim
            if(i%2 == 0) {
                topRim = cc.instantiate(this.topRim);    //生成上篮筐节点
                bottomRim = cc.instantiate(this.bottomRim);    //生成下篮筐节点
                topRim.setPosition({x: this.nextRim*i, y: 0});    //设置生成上篮筐的位置
                bottomRim.setPosition({x: this.nextRim*i, y: 0}); //设置生成下篮筐的位置
                this.node.addChild(topRim,1);
                this.node.addChild(bottomRim,3);
            }else{
                topRim = cc.instantiate(this.topRim);    //生成上篮筐节点
                bottomRim = cc.instantiate(this.bottomRim);    //生成下篮筐节点
                topRim.setPosition({x: this.nextRim*i, y: 200});    //设置生成上篮筐的位置
                bottomRim.setPosition({x: this.nextRim*i, y: 200}); //设置生成下篮筐的位置
                this.node.addChild(topRim,1);
                this.node.addChild(bottomRim,3);
            }
            
            //篮筐集合
            this.rims.push({topRim: topRim ,bottomRim: bottomRim});
        }
    },

    /**
     * 移除篮筐
     * @return {[type]} [description]
     */
    removeRim: function(r) {
        this.rims.forEach((rim,index) => {
            this.rims.splice(0,1);
            if(r.node == rim.bottomRim) {
                for(let key in rim) {
                    rim[key].destroy();
                }
            }
            return true;
            console.log(this.rims);
        });
    }

});
