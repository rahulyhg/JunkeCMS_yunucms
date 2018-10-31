<?php
namespace app\admin\controller;
use think\Config;
use think\Db;
use think\Session;
use think\Request;

class Datacount extends Common
{
	//百度统计
    public function baidutj() {
        return $this->fetch();
    }

    //主词监控
    public function pmjkhq() {
        $this->cloud = new \com\Cloud();
        //主词排名监控获取
        $mainkeywords = null;
        if (config('sys.api_pmjkhq')) {
            $mainkeywords = send_post($this->cloud->yunapiUrl().'/getMainKeywords', ['domain'=>config('sys.site_levelurl')]);
            $mainkeywords = $mainkeywords ? json_decode($mainkeywords, true) : null;
            if ($mainkeywords) {
                $mainkeywords = $mainkeywords['state'] == 1 ? $mainkeywords['data'][0] : null;
            }
        }
        
        $this->assign([
            'mainkeywords' => $mainkeywords,
        ]);
        return $this->fetch();
    }

    //媒体联盟
    public function medialm(){
    	return $this->fetch();
    }

    //个人信息
    public function mediauser(){
    	return $this->fetch();
    }

    //编辑媒体内容
    public function editmediacon(){
        return $this->fetch();
    }

    //删除媒体内容
    public function delmediacon(){
        
    }
}
