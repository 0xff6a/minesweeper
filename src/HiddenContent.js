function HiddenContent() {};

HiddenContent.prototype.display = function() {
    return "hidden";
};

function Blank() {};
Blank.prototype = new HiddenContent;
Blank.prototype.constructor = Blank;

function Mine() {};
Mine.prototype = new HiddenContent;
Mine.prototype.constructor = Mine;



