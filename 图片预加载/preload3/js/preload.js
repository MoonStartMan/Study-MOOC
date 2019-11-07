//  图片预加载
(function($){
    
    function PerLoad(imgs, options) {
        this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
        this.opts = $.extend({}, PerLoad.DEFAULTS, options);

        if(this.opts.order === "ordered") {
            this._ordered();
        } else {
            this._unoredered();
        }
    }
    PerLoad.DEFAULTS = {
        order: 'unordered', //  无序预加载
        each: null, //  每一张图片加载完毕后执行
        all: null   //  所有图片加载完毕后执行
    };

    PerLoad.prototype._ordered = function() {   //  有序加载
        var opts = this.opts,
            imgs = this.imgs,
            len = imgs.length,
            count = 0;

            load();

        //  有序预加载
        function load() {
            var imgObj = new Image();

            $(imgObj).on('load error', function() {
                opts.each && opts.each(count);
                if(count >= len) {
                    //  所有图片已经加载完毕
                    opts.all && opts.all();
                } else {
                    load();
                }

                count ++;
            });

            imgObj.src = imgs[count];
        }
    }

    PerLoad.prototype._unoredered = function() {  //    无序加载

        var imgs = this.imgs,
            opts = this.opts,
            count = 0,
            len = imgs.length;

        $.each(imgs, function(i, src){

            if(typeof src != 'string') return;

            var imgObj = new Image();
     
            $(imgObj).on('load error', function() {
                opts.each && opts.each(count);

                 if(count >= len-1) {
                    opts.all && opts.all();
                 }
                 count++;
             });
             imgObj.src = src;
         });
    };

    $.extend({
        preload:function(imgs, opts) {
            new PerLoad(imgs, opts);
        }
    })

})(jQuery);