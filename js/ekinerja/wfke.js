var _0x7e29=["\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x66\x69\x6E\x64","\x63\x6F\x6E\x74\x65\x6E\x74\x73","\x6C\x65\x6E\x67\x74\x68","\x61\x6C\x72\x65\x61\x64\x79\x46\x6F\x75\x6E\x64","\x64\x61\x74\x61","\x65\x61\x63\x68","\x63\x6F\x6E\x74\x72\x6F\x6C\x4F\x62\x6A","\x5F","\x72\x65\x70\x6C\x61\x63\x65"];
function waitForKeyElements(_0xd348x2,_0xd348x3,_0xd348x4,_0xd348x5)
{
	var _0xd348x6,_0xd348x7;
	if( typeof _0xd348x5== _0x7e29[0])
	{
		_0xd348x6= $(_0xd348x2)
	}
	else 
	{
		_0xd348x6= $(_0xd348x5)[_0x7e29[2]]()[_0x7e29[1]](_0xd348x2)
	}
	if(_0xd348x6&& _0xd348x6[_0x7e29[3]]> 0)
	{
		_0xd348x7= true;_0xd348x6[_0x7e29[6]](function()
		{
			var _0xd348x8=$(this);
			var _0xd348x9=_0xd348x8[_0x7e29[5]](_0x7e29[4])|| false;
			if(!_0xd348x9)
			{
				var _0xd348xa=_0xd348x3(_0xd348x8);
				if(_0xd348xa)
				{
					_0xd348x7= false
				}
				else 
				{
					_0xd348x8[_0x7e29[5]](_0x7e29[4],true)
				}
			}
		}
		)
	}
	else 
	{
		_0xd348x7= false
	}
	var _0xd348xb=waitForKeyElements[_0x7e29[7]]|| {};
	var _0xd348xc=_0xd348x2[_0x7e29[9]](/[^\w]/g,_0x7e29[8]);
	var _0xd348xd=_0xd348xb[_0xd348xc];
	if(_0xd348x7&& _0xd348x4&& _0xd348xd)
	{
		clearInterval(_0xd348xd);delete _0xd348xb[_0xd348xc]
	}
	else 
	{
		if(!_0xd348xd)
		{
			_0xd348xd= setInterval(function()
			{
				waitForKeyElements(_0xd348x2,_0xd348x3,_0xd348x4,_0xd348x5)
			}
			,300);_0xd348xb[_0xd348xc]= _0xd348xd
		}
	}
	waitForKeyElements[_0x7e29[7]]= _0xd348xb
}
