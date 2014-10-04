function HiddenContent() {};

function Blank() {};

function Mine() {};

HiddenContent.prototype.display = function() {
    return "hidden";
};

Blank.inherits(HiddenContent);
Mine.inherits(HiddenContent);
