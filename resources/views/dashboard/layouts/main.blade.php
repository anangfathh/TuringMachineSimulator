<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>TBA - Turing Machine Kelompok 4</title>

	<!-- Global stylesheets -->
	<link href="{{ asset('assets/css/ltr/all.min.css') }}" id="stylesheet" rel="stylesheet" type="text/css">
	<link href="{{ asset('assets/css/custom.css') }}" rel="stylesheet" />
    <!-- /global stylesheets -->

	<!-- Core JS files -->
	<!-- /core JS files -->


	<script src="{{ asset('assets/js/app.js') }}"></script>
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
	<!-- /theme JS files -->

</head>
    <title>@yield('title')</title>
</head>

<body>
    @include('dashboard.layouts.navbar')
    <div class="page-content">
        <div class="content-wrapper">
            <div class="content-inner">
                @yield('container')
            </div>
            <div class="navbar navbar-sm navbar-footer border-top">
                <div class="container-fluid">
                    <span>&copy; 2023 <a href="#">KELOMPOK 4 TBA</a></span>
                </div>
            </div>
        </div>

    </div>

</body>
</html>
