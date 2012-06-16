var EXPORTED_SYMBOLS = ["SimpleListColumn"];

Components.utils.import("chrome://fibro/content/modules/Utils/XBLUtils.jsm");
Components.utils.import("chrome://fibro/content/bindings/itemview/ListBase.jsm");

/**
 * Column for a simple list view
 *
 * @constructor
 * @param   {element}   node   The connected DOM element
 */
SimpleListColumn = function SimpleListColumn(node)
{
	this.node = node;
	this._list = null;
	
	this.node.addEventListener("click", this.onClick.bind(this), false);
	this.node.addEventListener("dblclick", this.onDblClick.bind(this), false);
	
};

SimpleListColumn.prototype = {
	
	constructor: SimpleListColumn,
	
	//覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧
	/// 
	//覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧
	get list()
	{
		// if we already found our control, then return it (save some performance)
		if(this._list)
			return this._list;
		
		// otherwise look for the control
		var parent = this.node.parentNode;
		while (parent)
		{
			if (parent.impl && parent.impl instanceof ListBase)
			{
				this._list = parent.impl;
				return this._list;
			}
			parent = parent.parentNode;
		}
		
		return null;
	},
	
	//覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧
	/// 
	//覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧
	onClick: function onClick(event)
	{
		if(event.target === this)
			this.list.clearSelection();
	},
	
	//覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧
	/// 
	//覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧覧
	onDblClick: function onDblClick(event)
	{
		if(event.target === this)
			this.list.openGroupParent(event);
	},
	
};

