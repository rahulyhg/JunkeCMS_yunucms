<?php
namespace app\common\validate;
use think\Validate;

class Admin extends Validate
{
	protected $rule = [
        'username|管理员帐号'  =>  'require|unique:admin|max:25|min:4',
    ];

    /*$msg = [
	    'name.max'     => '名称最多不能超过25个字符',
	    'age.number'   => '年龄必须是数字',
	    'age.between'  => '年龄必须在1~120之间',
	    'email'        => '邮箱格式错误',
	];*/
}
