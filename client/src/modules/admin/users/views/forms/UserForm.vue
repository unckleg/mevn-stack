<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="panel panel-default">
                <div class="panel-heading font-bold">Form</div>
                <div class="panel-body">
                    <form role="form">
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text" class="form-control" placeholder="Enter username" autocomplete="off">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Enter password" autocomplete="off">
                            <br/>
                            <input type="password" class="form-control" placeholder="Repeat password" autocomplete="off">
                        </div>
                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" class="form-control" placeholder="Enter email" autocomplete="off">
                        </div>
                        <div class="form-group">
                            <label>First Name</label>
                            <input type="text" class="form-control" placeholder="Enter first name" autocomplete="off">
                        </div>
                        <div class="form-group">
                            <label>Last Name</label>
                            <input type="text" class="form-control" placeholder="Enter last name" autocomplete="off">
                        </div>
                        <div class="form-group">
                            <label>Avatar</label>
                            <input type="file" class="form-control">
                        </div>
                        <div class="line line-dashed b-b line-lg pull-in"></div>
                        <div class="form-group">
                            <div class="checkbox">
                                <label class="i-checks">
                                <input type="checkbox" value="">
                                <i></i>
                                Active/Not Active
                                </label>
                            </div>
                        </div>
                        <div class="line line-dashed b-b line-lg pull-in"></div>
                        <button type="submit" class="btn btn-sm btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
