<template>
    <aside id="aside" class="app-aside hidden-xs bg-black">
        <div class="aside-wrap">
            <div class="navi-wrap">
                <nav class="navi clearfix">
                    <ul class="nav">
                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                            <span>CMS</span>
                        </li>
                        <router-link tag="li" :to="{ name: 'admin_dashboard'}" active-class="active" exact>
                            <a>
                                <i class="glyphicon glyphicon-stats icon"></i>
                                <span class="font-bold">Dashboard</span>
                            </a>
                        </router-link>

                        <li class="">
                            <a href="" class="auto">
                              <span class="pull-right text-muted">
                                  <i class="fa fa-fw fa-angle-right text"></i>
                                  <i class="fa fa-fw fa-angle-down text-active"></i>
                              </span>
                              <i class="glyphicon glyphicon-th-large icon"></i>
                              <span class="font-bold">Apps</span>
                            </a>
                            <ul class="nav nav-sub dk">
                              <li class="nav-sub-header">
                                <a href="">
                                  <span>Apps</span>
                                </a>
                              </li>
                              <li ui-sref-active="active">
                                <a ui-sref="app.todo" href="#/app/todo">
                                  <span>Todo</span>
                                </a>
                              </li>
                              <li ui-sref-active="active">
                                <a ui-sref="apps.note" href="#/apps/note">
                                  <span>Note</span>
                                </a>
                              </li>
                              <li ui-sref-active="active">
                                <a ui-sref="apps.contact" href="#/apps/contact">
                                  <span>Contacts</span>
                                </a>
                              </li>
                              <li ui-sref-active="active">
                                <a ui-sref="app.weather" href="#/app/weather">
                                  <span>Weather</span>
                                </a>
                              </li>
                            </ul>
                        </li>

                        <li class="line dk" style="height: 2px;"></li>
                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                            <span>Site Content</span>
                        </li>
                        <li>
                            <a>
                                <b class="badge bg-info pull-right">9</b>
                                <i class="glyphicon glyphicon-edit icon"></i>
                                <span >Posts</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="glyphicon glyphicon-th-large icon"></i>
                                <span >Pages</span>
                            </a>
                        </li>

                        <li class="line dk"></li>
                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                            <span>Appearance</span>
                        </li>
                        <li>
                            <a>
                                <i class="glyphicon glyphicon-tint"></i>
                                <span >Themes</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="glyphicon glyphicon-list"></i>
                                <span >Menus</span>
                            </a>
                        </li>

                        <li class="line dk"></li>
                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                            <span>Administration</span>
                        </li>

                        <router-link tag="li" :to="{ name: 'admin_users'}" active-class="active">
                            <a>
                                <i class="glyphicon glyphicon-user"></i>
                                <span >Users</span>
                            </a>
                        </router-link>

                        <li class="line dk"></li>
                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                            <span>Settings</span>
                        </li>
                        <li>
                            <a>
                                <i class="glyphicon glyphicon-wrench"></i>
                                <span >Site</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </aside>
</template>

<script>
    export default {
        name: 'admin-sidebar'
    }
</script>
