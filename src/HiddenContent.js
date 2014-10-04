function HiddenContent() {};

function Blank() {};

function Mine() {};

HiddenContent.prototype.display = function() {
    return "hidden";
};

Blank.prototype = new HiddenContent;
Blank.prototype.constructor = Blank;
Mine.prototype = new HiddenContent;
Mine.prototype.constructor = Mine;



