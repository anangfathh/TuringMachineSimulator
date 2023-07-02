@extends('dashboard.layouts.main')

@section('container')
    <div class="content container pt-0">
        <div class="card mt-4" style="display: flex; align-items: center; justify-content:center;">
            <div class="card-body">
                <h5 class="card-title" style="text-align: center; font-size: xx-large; margin-bottom: 10px">Factorial</h5>
                <div class="d-flex justify-content-between">
                    <div>
                        <label for="val1">Input</label>
                        <input type="number" name="val1" id="val1" class="form-control">
                    </div>
                </div>
                <div class="d-flex justify-content-around align-items-center px-5">
                    <button class="btn btn-success m-2" type="submit" id="controller_init"
                        onclick="init(); this.disabled = true;"value="Submit"><i
                            class="ph ph-check pe-1"></i>Submit</button>
                    {{-- <input class="btn btn-success m-2" type="button" id="controller_init" onclick="init(); this.disabled = true;" value="Submit" /> --}}
                    <button class="btn btn-primary" id="controller_step" type="button" onclick="step()"><i
                            class="ph ph-fast-forward pe-1"></i>Step</button>
                    <button class="btn btn-warning ms-2" id="controller_animate" type="button" onclick="animateState()"><i class="ph ph-play pe-1"></i>Animate</button>
                    <button class="btn btn-info m-2" id="controller_skip" type="button" onclick="skipState()"><i
                            class="ph ph-skip-forward pe-1"></i>Skip</button>
                    <button class="btn btn-danger" type="button" onclick="window.location.reload();"><i
                            class="ph ph-arrow-counter-clockwise pe-1"></i>Reset</button>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Output</span>
                    <input type="text" class="form-control" id="show-answer" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" disabled />
                </div>
            </div>
            <div class="card" style="display: flex; align-items: center; justify-content:center;">
                <div class="card-body">
                    <h5 style="text-align: center">State</h5>
                    <div class="d-flex justify-content-center flex-column">
                        <div class="d-flex w-100 justify-content-center mb-4">
                            <div class="border rounded-3 bg-light p-2 text-md-center align-middle" id="show-state-now"
                                style="width: 240px">
                                <p class="my-2">-</p>
                            </div>
                        </div>
                        <div class="bg-secondary overflow-auto flex-nowrap">
                            <div id="turing_tape" style="max-width: 64rem"
                                class="rounded-3 d-flex turing-tape overflow-auto flex-nowrap"></div>
                            <div id="turing_tape2" style="max-width: 64rem"
                                class="rounded-3 d-flex turing-tape overflow-auto flex-nowrap"></div>
                            <div id="turing_tape3" style="max-width: 64rem"
                                class="rounded-3 d-flex turing-tape overflow-auto flex-nowrap"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="{{ asset('assets/js/factorial.js') }}"></script>
@endsection
