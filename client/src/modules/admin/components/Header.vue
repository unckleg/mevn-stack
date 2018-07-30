<template>
    <header id="header" class="app-header navbar" role="menu">
        <div class="navbar-header bg-black">
            <button class="pull-right visible-xs dk">
                <i class="glyphicon glyphicon-cog"></i>
            </button>
            <button class="pull-right visible-xs">
                <i class="glyphicon glyphicon-align-justify"></i>
            </button>
            <a href="#/" class="navbar-brand text-lt">
                <i class="fa fa-btc"></i>
                <img src="img/logo.png" alt="." class="hide">
                <span class="hidden-folded m-l-xs">Angulr</span>
            </a>
        </div>

        <div class="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
            <div class="nav navbar-nav hidden-xs">
                <a href="#" class="btn no-shadow navbar-btn" ui-toggle-class="app-aside-folded" target=".app">
                    <i class="fa fa-dedent fa-fw text"></i>
                    <i class="fa fa-indent fa-fw text-active"></i>
                </a>
            </div>

            <form class="navbar-form navbar-form-sm navbar-left shift" ui-shift="prependTo" data-target=".navbar-collapse" role="search" ng-controller="TypeaheadDemoCtrl">
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" ng-model="selected" typeahead="state for state in states | filter:$viewValue | limitTo:8" class="form-control input-sm bg-light no-border rounded padder" placeholder="Search projects...">
                        <span class="input-group-btn">
                        <button type="submit" class="btn btn-sm bg-light rounded"><i class="fa fa-search"></i></button>
                        </span>
                    </div>
                </div>
            </form>

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
                        <li>
                            <a href="">
                                <span class="badge bg-danger pull-right">30%</span>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a @click="logout">Logout</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    import {types} from './../auth/store/types';

    export default {
        name: 'Header',

        methods: {
            logout() {
                this.$store.dispatch(types.actions.AUTH_LOGOUT).then(() => {
                    this.$router.push({ name: 'admin_auth' });
                }).catch(err => {
                    this.message = err.message;
                });
            }
        }
    }
</script>
