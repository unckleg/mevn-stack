<template>
    <header id="header" class="app-header navbar" role="menu">
        <div class="navbar-header bg-dark">
            <button class="pull-right visible-xs dk" ui-toggle-class="show" target=".navbar-collapse">
                <i class="glyphicon glyphicon-cog"></i>
            </button>
            <button class="pull-right visible-xs" ui-toggle-class="off-screen" target=".app-aside" ui-scroll="app">
                <i class="glyphicon glyphicon-align-justify"></i>
            </button>
            <a href="#/" class="navbar-brand text-lt">
                <i class="fa fa-btc"></i>
                <img src="img/logo.png" alt="." class="hide">
                <span class="hidden-folded m-l-xs">Angulr</span>
            </a>
        </div>

        <div class="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" data-toggle="dropdown" class="dropdown-toggle clear">
                            <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                            <img src="img/a0.jpg" alt="...">
                            <i class="on md b-white bottom"></i>
                            </span>
                        <span class="hidden-sm hidden-md">John.Smith</span> <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu animated fadeInRight w">
                        <li class="wrapper b-b m-b-sm bg-light m-t-n-xs">
                            <div>
                                <p>300mb of 500mb used</p>
                            </div>
                            <div class="progress progress-xs m-b-none dker">
                                <div class="progress-bar progress-bar-info" data-toggle="tooltip"
                                     data-original-title="50%" style="width: 50%"></div>
                            </div>
                        </li>
                        <li>
                            <a href>
                                <span class="badge bg-danger pull-right">30%</span>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            <a>Profile</a>
                        </li>
                        <li>
                            <a>
                                <span class="label bg-info pull-right">new</span>
                                Help
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a ui-sref="access.signin">Logout</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </header>
</template>
