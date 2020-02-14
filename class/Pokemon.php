<?php

class Pokemon{

    private $avatar;
    private $name;
    private $life;
    private $atak;
   
    
function __construct($avatar, $name, $life, $atak)
    {
        $this->avatar = $avatar;
        $this->name = $name;
        $this->life = $life;
        $this->atak = $atak;
    }

    public function getAvatar(){
        return $this->avatar;
    }

    public function getName(){
        return $this->name;
    }

    public function getLife(){
        return $this->life;
    }

    public function getAtak(){
        return $this->atak;
    }

}