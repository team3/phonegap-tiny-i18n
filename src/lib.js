$.automgr = $.automgr || {
    version : "1.0.0",

    app_title: "Smart Auto Helper",

    categories: [
        "fuel",
        "repair",
        "wash",
        "parking",
        "washer",
        "insurance",
        "tires",
        "fines",
        "misc"
    ],

    colors: {
        "fuel" : "#ffba42",
        "repair" : "#ff6e3b",
        "wash" : "#ff9f17",
        "parking" : "#5ac8fa",
        "washer" : "#5576f5",
        "insurance" : "#9276fe",
        "tires" : "#3bb8c0",
        "fines" : "#4cd964",
        "misc" : "#ffd542"
    },

    i18n: {},

    brands_tree: {},

    lang: false,
    default_lang: "en",
    currency: "USD",
    currency_code: "name_currency_1",
    units: {
        code: "us",
        distance: "mi",
        volume: "gal",
        gas: "gal"
    },
    payment_method: "name_paymenttype_7",
    fuel_type: "name_gastype_4",

    profile: false,

    profile_file_name: "profile.json",
    profile_fp: {},
    
    data_dir: {},
    app_dir: {},

    alerts: [],

    bundled_types: {
        payment_methods: [ "name_paymenttype_1","name_paymenttype_2","name_paymenttype_3","name_paymenttype_4","name_paymenttype_5","name_paymenttype_6","name_paymenttype_7" ],
        misc: ["name_Misc_type_1", "name_Misc_type_2", "name_Misc_type_3", "name_Misc_type_4", "name_Misc_type_5", "name_Misc_type_6", "name_Misc_type_7", "name_Misc_type_8", "name_Misc_type_9", "name_Misc_type_10", "name_Misc_type_11", "name_Misc_type_12", "name_Misc_type_13", "name_Misc_type_14", "name_Misc_type_15", "name_Misc_type_16"],
        fuel: ["name_gastype_1", "name_gastype_2", "name_gastype_3", "name_gastype_4", "name_gastype_5", "name_gastype_6", "name_gastype_7"],
        tires: ["name_tires_purchasealloy", "name_tires_purchasetires", "name_tires_type1", "name_tires_type2", "name_tires_type3", "name_tires_type4", "name_tires_type5"],
        repair: ['name_rep_1', 'name_rep_2', 'name_rep_3', 'name_rep_4', 'name_rep_5', 'name_rep_6', 'name_rep_7', 'name_rep_8', 'name_rep_9', 'name_rep_10', 'name_rep_11', 'name_rep_12', 'name_rep_13', 'name_rep_14', 'name_rep_15', 'name_rep_16', 'name_rep_17', 'name_rep_17_1', 'name_rep_18', 'name_rep_19', 'name_rep_20', 'name_rep_21', 'name_rep_22', 'name_rep_23', 'name_rep_24', 'name_rep_25', 'name_rep_26', 'name_rep_27', 'name_rep_28', 'name_rep_29', 'name_rep_30', 'name_rep_31'],
        currency: ['name_currency_1', 'name_currency_2', 'name_currency_3', 'name_currency_4', 'name_currency_5', 'name_currency_6', 'name_currency_7', 'name_currency_8', 'name_currency_9', 'name_currency_10', 'name_currency_11', 'name_currency_12', 'name_currency_13', 'name_currency_14', 'name_currency_15', 'name_currency_16', 'name_currency_17', 'name_currency_18', 'name_currency_19', 'name_currency_20', 'name_currency_21', 'name_currency_22', 'name_currency_23', 'name_currency_24'],
        units: ["eu", "us"],
        colors: ['name_body_color1', 'name_body_color2', 'name_body_color3', 'name_body_color4', 'name_body_color5', 'name_body_color6', 'name_body_color7', 'name_body_color8', 'name_body_color9', 'name_body_color10', 'name_body_color11', 'name_body_color12', 'name_body_color13', 'name_body_color14', 'name_body_color15'],
        body: ["name_body_Microcar", "name_body_Hatchback", "name_body_Sedan", "name_body_Universal", "name_body_sport", "name_body_convertivble", "name_body_offroad", "name_body_Minivan", "name_body_Van", "name_body_coupe", "name_body_Pickup", "name_body_crossover", "name_body_truck"]
    },

    custom_repairs: [],
    custom_misc: [],
    custom_payments: [],
    custom_tires: [],
    custom_fuels: [],
    custom_colors: [],
    custom_currencies: [],

    custom_brands: [],
    custom_models: [],

    wheelables: [ "name_rep_12", "name_rep_16", "name_rep_18" ],

    monthly_mileage_alert: true,
    last_mileage_alert: 0,

    views: {},
    charting: {},
    reporting: {},

    // pull changes from coredata
    sync: function(obj) {
        window.plugin.notification.local.cdFetch( {entityName: "Profile"}, function(data) {
            //console.log("State from CoreData:");
            //console.log(data);
            // if we get here, data[0] will contain object from coredata
            var stateObj = data[0], profile = new _profile();

            $.automgr.currency = stateObj.currency;
            $.automgr.currency_code = stateObj.currency_code;
            $.automgr.lang = stateObj.lang;
            $.automgr.monthly_mileage_alert = stateObj.monthly_mileage_alert;
            $.automgr.payment_method = stateObj.payment_method;
            $.automgr.units = {
                code: stateObj.units_code,
                distance: stateObj.distance_unit,
                gas: stateObj.gas_unit,
                volume: stateObj.volume_unit
            };
            $.automgr.custom_repairs = stateObj.custom_repairs;
            $.automgr.custom_misc = stateObj.custom_misc;
            $.automgr.custom_payments = stateObj.custom_payments;
            $.automgr.custom_tires = stateObj.custom_tires;
            $.automgr.custom_fuels = stateObj.custom_fuels;
            $.automgr.custom_colors = stateObj.custom_colors;
            $.automgr.custom_currencies = stateObj.custom_currencies;
            $.automgr.custom_brands = stateObj.custom_brands;
            $.automgr.custom_models = stateObj.custom_models;

            window.plugin.notification.local.cdFetch( {entityName: "Vehicle"}, function(data) {
                //console.log("Vehicles from CoreData:");
                //console.log(data);
                var vehicles = {};

                for(var i = 0; i < data.length; i++) {
                    var vehicle = new _vehicle(), v = data[i];
                    vehicle.uid = v.uid;
                    vehicle.make = v.make;
                    vehicle.model = v.model;
                    vehicle.year = v.year;
                    vehicle.mileage = v.mileage;
                    vehicle.image = v.image;
                    vehicle.color = v.color;
                    vehicle.body_type = v.body_type;
                    vehicle.engine_hp = v.engine_hp;
                    vehicle.engine_vol = v.engine_vol;
                    vehicle.engine_type = v.engine_type;
                    vehicle.tank_vol = v.tank_vol;
                    vehicle.expenses = [];
                    vehicle.reminders = [];

                    vehicles[v.uid] = vehicle;
                }

                window.plugin.notification.local.cdFetch( {entityName: "Expense"}, function(data) {
                    for(var i = 0; i < data.length; i++) {
                        var exp = data[i];
                        if(vehicles[exp["vehicle_uid"]]) {
                            var expense = new _expense();
                            for(var index in exp) {
                                if(exp.hasOwnProperty(index)) {
                                    expense[index] = exp[index];
                                }
                            }
                            vehicles[exp["vehicle_uid"]]["expenses"].push(expense);
                        }
                    }

                    window.plugin.notification.local.cdFetch( {entityName: "Reminder"}, function(data) {
                        for(var i = 0; i < data.length; i++) {
                            var rem = data[i];
                            if(vehicles[rem["vehicle_uid"]]) {
                                var reminder = new _reminder();
                                for(var index in rem) {
                                    if(exp.hasOwnProperty(index)) {
                                        reminder[index] = rem[index];
                                    }
                                }
                                vehicles[rem["vehicle_uid"]]["reminders"].push(reminder);
                            }
                        }

                        // all set up at this point
                        profile.uid = stateObj.uid;
                        profile.current_vehicle_uid = stateObj.current_vehicle_uid;
                        profile.vehicles = [];
                        for(var index in vehicles) {
                            if(vehicles.hasOwnProperty(index)) {
                                profile.vehicles.push(vehicles[index]);
                            }
                        }
                        //console.log(profile);
                        $.automgr.profile = profile;
                    });
                });
            });
        });
    },

    load: function() {
        //console.log("$.automgr.load()");
        $.automgr.profile = new _profile();

        function fail(evt) {
            console.log(evt.target.error.code);
        }
        if( !window.cordova ||
            !window.cordova.file ||
            !window.cordova.file.syncedDataDirectory ) {
            return;
        }

        console.log(cordova.file.syncedDataDirectory);
        window.resolveLocalFileSystemURL(cordova.file.syncedDataDirectory, function(dirEntry) {
            console.log("resolved FS");
            $.automgr.data_dir = dirEntry;
            dirEntry.getFile("profile.json", { create: true }, function(fileEntry) {
                console.log("Got fileEntry");
                $.automgr.profile_fp = fileEntry;
                fileEntry.file(function(file) {
                    console.log("Got file");
                    var reader = new FileReader();
                    reader.onloadend = function(evt) {
                        console.log("File read");

                        var obj = {};
                        try {
                            obj = JSON.parse(evt.target.result)
                        } catch(e) {
                            console.log("Got broken profile!");
                        }

                        var p = {};
                        if( obj['profile'] != undefined ) {
                            p = obj.profile;
                            var fields = [ "lang", "units", "currency", "currency_code", "payment_method", "fuel_type", "custom_misc", "custom_repairs", "custom_payments", "custom_tires", "custom_fuels", "custom_colors", "custom_currencies", "custom_brands", "custom_models", "monthly_mileage_alert" ];
                            for(var i = 0; i < fields.length; i++) {
                                if (obj[fields[i]] != undefined) {
                                    $.automgr[fields[i]] = obj[fields[i]];
                                }
                            }
                        } else {
                            p = obj;
                        }

                        if (!p || !p['uid']) {
                            console.log("Got empty profile");
                        } else {
                            $.automgr.profile.init(p);
                        }

                        $(document).trigger('profile_ready');
                        console.log("profile_ready");
                    };
                    reader.readAsText(file);
                }, fail);
            }, fail);
        }, fail);

        if(!$.automgr.views.brands.length) {
            var list = Object.keys($.automgr.brands_tree);
            for(var i = 0; i < list.length; i++) {
                $.automgr.views.brands.push( {
                    name: $.automgr.i18n[$.automgr.lang][list[i]],
                    code: list[i]
                } );
            }
        }

    },

    save: function() {
        if (!$.automgr.profile.uid) {
            $.automgr.profile.uid = md5( "profile_" + Math.random().toString() + (new Date()).getTime().toString() );
        }
        var updated = new Date();
        var obj = {
            updated: updated.getTime() / 1000,
            profile: $.automgr.profile,
            lang: $.automgr.lang,
            units: $.automgr.units,
            currency: $.automgr.currency,
            payment_method: $.automgr.payment_method,
            fuel_type: $.automgr.fuel_type,
            custom_repairs: $.automgr.custom_repairs,
            custom_misc: $.automgr.custom_misc,
            custom_payments: $.automgr.custom_payments,
            custom_fuels: $.automgr.custom_fuels,
            custom_tires: $.automgr.custom_tires,
            custom_colors: $.automgr.custom_colors,
            custom_currencies: $.automgr.custom_currencies,
            custom_brands: $.automgr.custom_brands,
            custom_models: $.automgr.custom_models,
            currency_code: $.automgr.currency_code,
            monthly_mileage_alert: $.automgr.monthly_mileage_alert
        }, obj_serialized = JSON.stringify(obj);

        if(this.profile_fp) {
            this.profile_fp.createWriter( function(writer) {
                writer.onwrite = function(evt) {
                    //save to coredata
                    window.plugin.notification.local.cdSync();
                };
                writer.write(obj_serialized);
            }, function(evt) { console.log("Error saving to disk!"); } );
        } else {
            console.log("Error saving to disk!");
        }
        //console.log("check mileage-based reminders");
        for(var i = 0; i < $.automgr.profile.vehicles.length; i++) {
            for(var j = 0; j < $.automgr.profile.vehicles[i].reminders.length; j++) {
                var r = new _reminder().init($.automgr.profile.vehicles[i].reminders[j]),
                    skip_save = true;
                if(r.on_mileage > 0) {
                    //console.log("found one (" + r.uid + "), checking...");
                    r.check_mileage($.automgr.profile.vehicles[i].mileage, skip_save);
                }
            }
        }
    },

    localized: false,
    relocalize: false,

    localize_me: function() {
        function do_localize() {
            var elements = $("[i18n]");
            for(var i = 0; i < elements.length; i++) {
                var el = $(elements[i]);
                var tag = el.attr("i18n");
                var loc_str = $.automgr.i18n_tag(tag);
                if( loc_str != "" ) {
                    el.text(loc_str);
                }
            }
            $.automgr.views.render_select_controls(".ios-7-select");
        }

        if (!$.automgr.lang || $.automgr.i18n[$.automgr.lang] === undefined) {
            //console.log("Device language unsupported, switching to default...");
            $.automgr.lang = $.automgr.default_lang;
        }
        if($.automgr_status.language_ready) {
            if($.automgr.units.code == "eu") {
                $.automgr.units.distance = $.automgr.i18n_tag("name_odo_km");
                $.automgr.units.volume = $.automgr.i18n_tag("name_vol_l");
                $.automgr.units.gas = $.automgr.i18n_tag("name_gas_l");
            } else {
                $.automgr.units.distance = $.automgr.i18n_tag("name_odo_mi");
                $.automgr.units.volume = $.automgr.i18n_tag("name_vol_cc");
                $.automgr.units.gas = $.automgr.i18n_tag("name_gas_gal");
            }
            do_localize();
            $.automgr.localized = $.automgr.lang;
            $.automgr_status.localize_ready = true;
        } else {
            //console.log("Language not determined yet, waiting...");
            window.setTimeout($.automgr.localize_me, 100);
        }
    },
    
    i18n_tag: function(tag) {
        function set_units(string) {
            if(string.indexOf("{{") != -1) {
                string = string.replace(/{{units:volume}}/, $.automgr.units.volume);
                string = string.replace(/{{units:distance}}/, $.automgr.units.distance);
                string = string.replace(/{{units:gas}}/, $.automgr.units.gas);
                string = string.replace(/{{currency}}/, $.automgr.currency);
            }
            return string;
        }


        if ($.automgr.i18n[$.automgr.lang][tag]) {
            return set_units($.automgr.i18n[$.automgr.lang][tag]);
        }
        return tag;
    },

    insert_custom_items: function() {
        //if($.automgr.custom_repairs.length > 0) {
        //    $.automgr.views.insert_custom_repairs($.automgr.custom_repairs);
        //}
        //if($.automgr.custom_misc.length > 0) {
        //    $.automgr.views.insert_custom_misc($.automgr.custom_misc);
        //}
        //if($.automgr.custom_payments.length > 0) {
        //    $.automgr.views.insert_custom_payments($.automgr.custom_payments);
        //}
        //if($.automgr.custom_tires.length > 0) {
        //    $.automgr.views.insert_custom_tires($.automgr.custom_tires);
        //}
        //if($.automgr.custom_fuels.length > 0) {
        //    $.automgr.views.insert_custom_fuels($.automgr.custom_fuels);
        //}
    },

    get_custom_item_by_uid: function(type, uid) {
        var list = [];
        switch(type) {
            case "misc":
                list = $.automgr.custom_misc;
                break;
            case "repair":
                list = $.automgr.custom_repairs;
                break;
            case "payment":
                list = $.automgr.custom_payments;
                break;
            case "fuel":
                list = $.automgr.custom_fuels;
                break;
            case "tires":
                list = $.automgr.custom_tires;
                break;
            case "currency":
                list = $.automgr.custom_currencies;
                break;
            case "brand":
                list = $.automgr.custom_brands;
                break;
            case "model":
                list = $.automgr.custom_models;
                break;
            case "color":
                list = $.automgr.custom_colors;
                break;
            default:
                break;
        }
        var rex = /custom_type_(\d+)/;
        uid.match(rex);
        var idx = RegExp.$1;
        idx--;
        if(list[idx]){
            return list[idx];
        } else {
            return "";
        }
    },

    get_custom_item_uid: function(type, value) {
        var list = [];
        switch(type) {
            case "misc":
                list = $.automgr.custom_misc;
                break;
            case "repair":
                list = $.automgr.custom_repairs;
                break;
            case "payment":
                list = $.automgr.custom_payments;
                break;
            case "fuel":
                list = $.automgr.custom_fuels;
                break;
            case "tires":
                list = $.automgr.custom_tires;
                break;
            case "currency":
                list = $.automgr.custom_currencies;
                break;
            case "brand":
                list = $.automgr.custom_brands;
                break;
            case "model":
                list = $.automgr.custom_models;
                break;
            case "color":
                list = $.automgr.custom_colors;
                break;
            default:
                break;
        }
        var uid = false;
        for(var i = 0; i < list.length; i++) {
            if(list[i] == value) {
                uid = "custom_type_" + (i+1);
            }
        }
        return uid;
    },

    add_custom_item: function(type, value) {
        switch(type) {
            case "misc":
                $.automgr.custom_misc.push(value);
                break;
            case "repair":
                $.automgr.custom_repairs.push(value);
                break;
            case "payment":
                $.automgr.custom_payments.push(value);
                break;
            case "fuel":
                $.automgr.custom_fuels.push(value);
                break;
            case "tires":
                $.automgr.custom_tires.push(value);
                break;
            case "currency":
                $.automgr.custom_currencies.push(value);
                break;
            case "brand":
                $.automgr.custom_brands.push(value);
                break;
            case "model":
                $.automgr.custom_models.push(value);
                break;
            case "color":
                $.automgr.custom_colors.push(value);
                break;
            default:
                break;
        }
        return $.automgr.get_custom_item_uid(type, value);
    },


    handle_custom_item: function($listview) {
        window.Keyboard.hideFormAccessoryBar(false);
        navigator.notification.prompt(
            $.automgr.i18n_tag("name_add_new"),
            function(r) {
                window.Keyboard.hideFormAccessoryBar(true);
                if(r.buttonIndex == 1 && r.input1.trim() != "") {
                    var new_type = r.input1.substr(0, 50);
                    var new_uid = $.automgr.add_custom_item( $listview.data("type"), new_type );

                    $.automgr.views.append_to_listview(new_uid, new_type);
                }
            },
            $.automgr.app_title,
            [$.automgr.i18n[$.automgr.lang]["name_ok"], $.automgr.i18n[$.automgr.lang]["name_cancel"]]
        );
    },

    new_payment_method_handler: function() {
        window.Keyboard.hideFormAccessoryBar(false);
        navigator.notification.prompt(
            $.automgr.i18n[$.automgr.lang]["name_paymenttype_new"] + ":",
            function(r) {
                window.Keyboard.hideFormAccessoryBar(true);
                if(r.buttonIndex == 1 && r.input1.trim() != "") {
                    var new_type = r.input1.substr(0, 50),
                        $elm = $("#item-payment");
                    $.automgr.custom_payments.push(new_type);
                    var new_uid = $.automgr.get_custom_item_uid("payment", new_type);
                    $elm.append('<option value="'+new_uid+'" selected>'+new_type+'</option>').val(new_uid);
                    $elm.mobiscroll('hide');
                    $.automgr.views.render_select_control_payment_method();
                    $elm.change();
                }
            },
            $.automgr.app_title,
            [$.automgr.i18n[$.automgr.lang]["name_ok"], $.automgr.i18n[$.automgr.lang]["name_cancel"]]
        );
    },

    new_repair_type_handler: function() {
        window.Keyboard.hideFormAccessoryBar(false);
        navigator.notification.prompt(
            $.automgr.i18n[$.automgr.lang]["name_rep_new"] + ":",
            function(r) {
                window.Keyboard.hideFormAccessoryBar(true);
                if(r.buttonIndex == 1 && r.input1.trim() != "") {
                    var new_type = r.input1.substr(0, 50),
                        $elm = $("#item-repair-type");
                    $.automgr.custom_repairs.push(new_type);
                    var new_uid = $.automgr.get_custom_item_uid("repair", new_type);
                    $elm.append('<option value="'+new_uid+'" selected>'+new_type+'</option>').val(new_uid);
                    $elm.mobiscroll('hide');
                    $.automgr.views.render_select_control_repair_type();
                    $elm.change();
                }
            },
            $.automgr.app_title,
            [$.automgr.i18n[$.automgr.lang]["name_ok"], $.automgr.i18n[$.automgr.lang]["name_cancel"]]
        );
    },

    new_misc_type_handler: function() {
        window.Keyboard.hideFormAccessoryBar(false);
        navigator.notification.prompt(
            $.automgr.i18n[$.automgr.lang]["name_Misc_type_new"] + ":",
            function(r) {
                window.Keyboard.hideFormAccessoryBar(true);
                if(r.buttonIndex == 1 && r.input1.trim() != "") {
                    var new_type = r.input1.substr(0, 50),
                        $elm = $("#item-misc-type");
                    $.automgr.custom_misc.push(new_type);
                    var new_uid = $.automgr.get_custom_item_uid("misc", new_type);
                    $elm.append('<option value="'+new_uid+'" selected>'+new_type+'</option>').val(new_uid);
                    $elm.mobiscroll('hide');
                    $.automgr.views.render_select_control_misc_type();
                    $elm.change();
                }
            },
            $.automgr.app_title,
            [$.automgr.i18n[$.automgr.lang]["name_ok"], $.automgr.i18n[$.automgr.lang]["name_cancel"]]
        );
    },
    
    new_tires_type_handler: function() {
        window.Keyboard.hideFormAccessoryBar(false);
        navigator.notification.prompt(
            $.automgr.i18n[$.automgr.lang]["name_tires_new"] + ":",
            function(r) {
                window.Keyboard.hideFormAccessoryBar(true);
                if(r.buttonIndex == 1 && r.input1.trim() != "") {
                    var new_type = r.input1.substr(0, 50),
                        $elm = $("#item-tires-repair-type");
                    $.automgr.custom_tires.push(new_type);
                    var new_uid = $.automgr.get_custom_item_uid("tires", new_type);
                    $elm.append('<option value="'+new_uid+'" selected>'+new_type+'</option>').val(new_uid);
                    $elm.mobiscroll('hide');
                    $.automgr.views.render_select_control_tires_type();
                    $elm.change();
                }
            },
            $.automgr.app_title,
            [$.automgr.i18n[$.automgr.lang]["name_ok"], $.automgr.i18n[$.automgr.lang]["name_cancel"]]
        );
    },

    new_fuel_type_handler: function() {
        window.Keyboard.hideFormAccessoryBar(false);
        navigator.notification.prompt(
            $.automgr.i18n[$.automgr.lang]["name_gastype_new"] + ":",
            function(r) {
                window.Keyboard.hideFormAccessoryBar(true);
                if(r.buttonIndex == 1 && r.input1.trim() != "") {
                    var new_type = r.input1.substr(0, 50),
                        $elm = $(".item-fuel-type");
                    $.automgr.custom_fuels.push(new_type);
                    var new_uid = $.automgr.get_custom_item_uid("fuel", new_type);
                    $elm.append( '<option value="'+new_uid+'" selected>'+new_type+'</option>').val(new_uid);
                    $elm.mobiscroll('hide');
                    $.automgr.views.render_select_control_fuel_type();
                    $elm.change();
                }
            },
            $.automgr.app_title,
            [$.automgr.i18n[$.automgr.lang]["name_ok"], $.automgr.i18n[$.automgr.lang]["name_cancel"]]
        );
    },

    new_vehicle_brand_handler: function() {
        window.Keyboard.hideFormAccessoryBar(false);
        navigator.notification.prompt(
            $.automgr.i18n_tag("name_1stwindow_newmodel") + ":",
            function(r) {
                window.Keyboard.hideFormAccessoryBar(true);
                if(r.buttonIndex == 1 && r.input1.trim() != "") {
                    var val = r.input1.substr(0, 30);
                    $("#vehicle-brand").text(val);
                    $("#vehicle-brand-select-filter").val(val);
                    $('#vehicle-brand-select').val("").change().mobiscroll('cancel');
                }
            },
            $.automgr.app_title,
            [$.automgr.i18n[$.automgr.lang]["name_ok"], $.automgr.i18n[$.automgr.lang]["name_cancel"]]
        );
    },
    
    new_vehicle_model_handler: function() {
        window.Keyboard.hideFormAccessoryBar(false);
        navigator.notification.prompt(
            $.automgr.i18n_tag("name_1stwindow_newmodel") + ":",
            function(r) {
                window.Keyboard.hideFormAccessoryBar(true);
                if(r.buttonIndex == 1 && r.input1.trim() != "") {
                    var val = r.input1.substr(0, 30);
                    $("#vehicle-model").text(val);
                    $("#vehicle-model-select-filter").val(val);
                    $('#vehicle-model-select').mobiscroll('cancel');
                }
            },
            $.automgr.app_title,
            [$.automgr.i18n[$.automgr.lang]["name_ok"], $.automgr.i18n[$.automgr.lang]["name_cancel"]]
        );
    },

    send_csv_report: function(email, from) {
        cordova.plugins.email.isAvailable(
            function (isAvailable) {
                if(!isAvailable) {
                    alert($.automgr.i18n_tag("name_export_csv_noemail"));
                } else {
                    if(email.trim() == "") {
                        alert($.automgr.i18n_tag("name_export_csv_error_email"));
                    } else {
                        var data = $.automgr.reporting.get_csv_data(from, new Date());

                        cordova.plugins.email.open({
                            to:          email,
                            attachments: data,
                            subject:    "",
                            body:       "",
                            isHtml:    true
                        }, function() {
                            alert($.automgr.i18n_tag("name_export_csv_done"));
                        });
                    }
                }
            }
        );
    },

    handle_triggered_notifications: function() {
        window.plugin.notification.local.getTriggeredIds(function(triggeredIds) {
            console.log("triggeredIds: " + triggeredIds.join(","));
            for(var i = 0; i < triggeredIds.length; i++) {
                var id = triggeredIds[i];
                var reminder = $.automgr.profile.get_reminder_by_uid(id);
                if(reminder) {
                    $.automgr.handle_local_notification("onfetch", id, "background", JSON.stringify(reminder.notification_data));
                }
            }
        });
    },

    handle_local_notification: function(event, id, state, json) {
        //console.log("window.plugin.notification.local."+event+"('"+id+"', '"+state+"', '"+json+"')");
        if(id) {
            window.plugin.notification.local.cancel(id);
            var found = false;
            for(i = 0; i < app.alerts.length; i++) {
                if(app.alerts[i]['uid'] == id) found = true;
            }
            if(!found) app.alerts.push({uid: id, payload: json, fired: false});
        }
    },

    load_sounds: function() {
        var sounds = ["click", "error", "galochka", "reminder"];
        for (var x in sounds) {
            window.plugins.LowLatencyAudio.preloadFX(sounds[x], 'res/sounds/' + sounds[x] + '.mp3', function (msg) {
            }, function (msg) {
                console.log('Error loading sounds: ' + msg);
            });
        }
    },
    play_sound: function(sound) {
        //console.log($.automgr.sounds);
        window.plugins.LowLatencyAudio.play(sound);
    }
};

function _profile() {
    this.uid = "";
    this.vehicles = [];
    this.current_vehicle_uid = "";
}

_profile.prototype = {
    constructor: _profile,
    
    init: function(p) {
        if (!p || !p.uid) {
            return;
        }

        this.uid = p.uid;
        this.vehicles = p.vehicles;
        this.current_vehicle_uid = p.current_vehicle_uid;
        for(var i = 0; i < this.vehicles.length; i++) {
            for(var j = 0; j < this.vehicles[i].expenses.length; j++) {
                if(this.vehicles[i].expenses[j]['uid'] == undefined || this.vehicles[i].expenses[j].uid == '') {
                    this.vehicles[i].expenses[j].uid = md5( "expense_" + Math.random().toString() + (new Date()).getTime().toString() );
                }
            }
        }
        return this;
    },
    
    save: function() {
        if (!this.uid) {
            var tmp = new Date();
            this.uid = md5( "profile_" + tmp.toString() );
        }

        $.automgr.save();
    },
    
    vehicle: function(uid) {
        for(var i = 0; i < this.vehicles.length; i++) {
            if ( (!uid && this.vehicles[i].uid == this.current_vehicle_uid) || (this.vehicles[i].uid == uid) ) {
                if( !_vehicle.prototype.isPrototypeOf(this.vehicles[i]) ) {
                    var obj = new _vehicle().init(this.vehicles[i]);
                    this.vehicles[i] = obj;
                }
                return this.vehicles[i];
            }
        }
        return false;
    },

    get_reminder_by_uid: function(uid) {
        for(var i = 0; i < this.vehicles.length; i++) {
            var vehicle = new _vehicle().init(this.vehicles[i]),
                r = vehicle.get_reminder_by_uid(uid);
            this.vehicles[i] = vehicle;
            if(r) return r;
        }
        return false;
    },

    delete_reminder_by_uid: function(uid) {
        for(var i = 0; i < this.vehicles.length; i++) {
            var vehicle = new _vehicle().init(this.vehicles[i]),
                r = vehicle.get_reminder_by_uid(uid);
            this.vehicles[i] = vehicle;
            if(r) {
                vehicle.remove_reminder_by_uid(uid);
                return true;
            }
        }
        return false;
    },
    
    add_vehicle: function(vehicle) {
        this.vehicles.push(vehicle);
        this.current_vehicle_uid = vehicle.uid;
        $.automgr.save();
    },
    
    delete_vehicle_by_uid: function(uid) {
        var vehicles = [];
        for(var i = 0; i < this.vehicles.length; i++) {
            if(this.vehicles[i].uid != uid) {
                vehicles.push(this.vehicles[i]);
            }
        }
        this.vehicles = vehicles;
    },
    
    stats_by_category: function(from, to) {
        var data = {};

        var el = this.vehicle();

        if(el) {
            var v = el.filter(false, from, to);
            for(var j = 0; j < v.length; j++) {
                var exp = v[j];
                if(!data[exp.category]) {
                    data[exp.category] = { amount: 0, category: exp.category };
                }
                data[exp.category].amount += parseFloat(exp.amount);
            }
        }

        return data;
    }
};

function _reminder(date, mileage) {
    this.uid = md5( "reminder_" + Math.random().toString() + (new Date()).getTime().toString() );
    this.on_date = date ? new Date(date) : false;
    this.on_mileage = mileage;
    this.type = "";
    this.reminder = "";
    this.vehicle = "";
    this.notification_data = {};
    this.state = {
        state_on_date: {
            muted: false,
            next: "date14",
            date14: {
                date: '',
                fired: false
            },
            date7: {
                date: '',
                fired: false
            },
            date: {
                date: '',
                fired: false
            }
        },
        state_on_mileage: {
            muted: false,
            next: "on2000",
            on2000: {
                mileage: 0,
                date: '',
                fired: false
            },
            on1000: {
                mileage: 0,
                date: '',
                fired: false
            },
            on500: {
                mileage: 0,
                date: '',
                fired: false
            },
            on: {
                mileage: 0,
                date: '',
                fired: false
            }
        }
    };
}

_reminder.prototype = {
    constructor: _reminder,

    init: function(stored) {
        if(stored) for(prop in stored) {
            if (stored.hasOwnProperty(prop) && this.hasOwnProperty(prop)) {
                this[prop] = stored[prop];
            }
        }
        return this;
    },

    set_intervals: function() {
        if(this.on_date) {
            var date = new Date(this.on_date);
            this.state.state_on_date.date14.date = new Date(("-14 days").strtotime(date));
            this.state.state_on_date.date7.date = new Date(("-7 days").strtotime(date));
            this.state.state_on_date.date.date = date;
        }
        if(this.on_mileage) {
            this.state.state_on_mileage.on2000.mileage = this.on_mileage - 2000;
            this.state.state_on_mileage.on1000.mileage = this.on_mileage - 1000;
            this.state.state_on_mileage.on500.mileage = this.on_mileage - 500;
            this.state.state_on_mileage.on.mileage = this.on_mileage;
        }
    },

    mute: function(type, muted) {
        if(type == "on_date") {
            this.state.state_on_date.muted = muted;
        } else if(type == "on_mileage") {
            this.state.state_on_mileage.muted = muted;
        }
        if(muted) {
            window.plugin.notification.local.cancel(this.uid);
        } else if(!muted && type == "on_date") {
            this.set(true, false);
        }
    },

    check_date: function(current) {

    },

    check_mileage: function(current, skip_save) {
        var diff = this.on_mileage - current,
            step = 0,
            save = !skip_save,
            next = "on2000";

        if (diff < 0) { // заданный пробег превышен
            next = "on";
            step = 4;
        } else if (diff < 500 && !this.state.state_on_mileage.on500.fired) { // до заданного пробега менее 500км
            step = 3;
            next = "on";
            this.state.state_on_mileage.on500.fired = true;
        } else if (diff < 1000 && !this.state.state_on_mileage.on1000.fired) { // до заданного пробега менее 1000км
            next = "on500";
            step = 2;
            this.state.state_on_mileage.on1000.fired = true;
        } else if (diff < 2000 && !this.state.state_on_mileage.on2000.fired) { // до заданного пробега менее 2000км
            next = "on1000";
            step = 1;
            this.state.state_on_mileage.on2000.fired = true;
        }

        if(step > 0 && !this.state.state_on_mileage.muted) {
            //$.automgr.alerts.push(this);
            this.state.state_on_mileage.next = next;
            //console.log("setting reminder:" + this.reminder + "; step=" + step);
            this.set(false, step);
            if(save) $.automgr.save();
        }
    },
    
    title: function() {
        var title = "";
        switch (this.type) {
            default:
            case "repair":
                title = $.automgr.i18n[$.automgr.lang]["name_remind_rep_req"];
                break;
            case "insurance":
                title = $.automgr.i18n[$.automgr.lang]["name_remind_insurance_req"];
                break;
            case "fines":
                title = $.automgr.i18n[$.automgr.lang]["name_remind_fines_req"];
                break;
        }
        return title;
    },
    
    cleanup: function() {
        
    },

    status: function(mode) {
        if(mode == "on_date" && this.on_date) {
            var now = new Date(),
                first = new Date(this.state.state_on_date.date14.date),
                last = new Date(this.on_date);

            if(app.mode == modes.release) { // align times for date-only comparison
                now = (new Date( now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0 )).getTime();
                first = (new Date( first.getFullYear(), first.getMonth(), first.getDate(), 0, 0, 0, 0 )).getTime();
                last = (new Date( last.getFullYear(), last.getMonth(), last.getDate(), 0, 0, 0, 0 )).getTime();
            } else {
                now = now.getTime();
                first = first.getTime();
                last = last.getTime();
            }

            if(now >= last) {
                return "overdue";
            } else if( now >= first ) {
                return "warn";
            } else {
                return "idle";
            }
        } else if(this.on_mileage) {
            var cur = $.automgr.profile.vehicle(this.vehicle).mileage,
                diff = this.on_mileage - cur;
            if (diff < 0) { // заданный пробег превышен
                return "overdue";
            } else if (diff < 2000) { // до заданного пробега менее 2000км
                return "warn";
            } else {
                return "idle";
            }
        }

        return false;
    },

    get_next_date: function(target, payload) {
        var date = new Date(target), next = "date14", min = new Date(("+1 day").strtotime());
        switch (payload.step) {
            case 1:
                date = new Date(("-14 days").strtotime(date));
                break;
            case 2:
                date = new Date(("-7 days").strtotime(date));
                next = "date7";
                break;
            case 3:
            default:
                date = new Date(("+1 day").strtotime(target));
                next = "date";
                break;
        }
        date.setTime( Math.max( date.getTime(), min.getTime() ) );
        if(app.mode == modes.debug) {
            console.log("Next date. Should-be date: " + date);
            date = new Date( ("+2 minutes").strtotime() );
            console.log("Next date. Fact date: " + date);
        }
        this.state.state_on_date.next = next;
        this.state.state_on_date[next].date = date;
        return date;
    },
    
    postpone: function(payload) {
        //console.log("reminder.postpone()");
        //console.log(this);
        var date = new Date();
        payload.step += 1;
        if( payload.on_date ) {
            //console.log("payload.on_date");
            date = this.get_next_date(this.on_date, payload);
            //console.log("New date:" + date);
        } else {
            //console.log("payload.on_date == false");
            //console.log("we're on mileage - cancel current, will add it back in future");
            window.plugin.notification.local.cancel(this.uid);
            return;
        }

        var ln = {
            id:         this.uid,
            date:       date,
            message:    this.reminder,
            title:      $.automgr.app_title + " Reminder",
            autoCancel: false,
            badge:      1,
            sound:      'motor.wav',
            json:       JSON.stringify(payload)
        };
        this.notification_data = payload;
        //console.log("postpone: " + JSON.stringify(ln));
        window.plugin.notification.local.add( ln );
    },

    set: function(on_date, on_mileage) {
        if (window["plugin"] == undefined || window.plugin["notification"] == undefined) {
            //console.log("Local notifications unavailable!");
            return;
        }
        var date = new Date(),
            payload = { step: 1, vehicle: $.automgr.profile.current_vehicle_uid, on_mileage: false, on_date: false };
        if(on_mileage) {
            payload.step = on_mileage;
            payload.on_mileage = true;
            if(app.mode == modes.debug) {
                date = new Date(("+2 minutes").strtotime());
            } else {
                date = new Date(("+1 day").strtotime());
            }
        } else {
            payload.on_date = true;
            date = this.get_next_date(this.on_date, payload);
        }
        if(app.mode == modes.debug) {
            var real_date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 0, 0);
            //console.log("Set. Should-be date: " + real_date);
            //console.log("Set. Fact date: " + date);
        } else {
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 0, 0);
        }
        var ln = {
            id:         this.uid,
            date:       date,
            message:    this.reminder,
            title:      $.automgr.app_title + " Reminder",
            autoCancel: false,
            sound:      'motor.wav',
            badge:      1,
            json:       JSON.stringify( payload )
        };
        this.notification_data = payload;
        //console.log( "Scheduling notification: " + JSON.stringify(ln) );

        window.plugin.notification.local.add( ln );
    }
};

function _expense(category, date, mileage, amount, payment) {
    this.uid = '';
    this.category = category;
    this.date = new Date(date);
    this.mileage = mileage;
    this.amount = amount;
    this.payment_method = payment ? payment : $.automgr.payment_method;
    this.photo = "";
    this.reminder_uid = "";
    this.subcategory = "";
    this.extra1 = "";
    this.extra2 = "";
    this.extra3 = "";
    this.extra4 = "";
    this.extra5 = "";
}

_expense.prototype = {
    constructor: _expense,

    init: function(e) {
        if(!e) e = {};
        var uid;
        if (e['uid'] == undefined || !e.uid) {
            uid = md5( "expense_" + Math.random().toString() + (new Date()).getTime().toString() );
        } else {
            uid = e.uid;
        }
        this.uid = uid;
        var k = Object.keys(e);
        for(var i = 0; i < k.length; i++) {
            this[k[i]] = e[k[i]];
        }
        return this;
    },

    title: function() {
        var title = this._category().capitalize(true);

        if(this.category == "repair") {
            if($.automgr.wheelables.indexOf(this.subcategory) != -1) {
                title = this._subcategory() + " (" + this.extra2.join(",") + ")";
            } else {
                title = this._subcategory();
            }
        } else if (this.category == "misc") {
            title = this._subcategory();
        } else if (this.category == "tires") {
            title = this._subcategory() + " (" + this.extra1.join(",") + ")";
        } else if (this.category == "fines" || this.category == "parking" || this.category == "wash") {
            if(this.extra1.length) {
                title += ". " + this.extra1;
            }
        }

        //if(title.length > 25) {
        //    title = title.substr(0, 23) + "...";
        //}

        return title;
    },

    _amount: function() {
        return numeral(this.amount).format("0,0") + $.automgr.currency;
    },

    _category: function() {
        return $.automgr.i18n[$.automgr.lang][this.category];
    },

    _subcategory: function() {
        if($.automgr.i18n[$.automgr.lang][this.subcategory]) {
            return $.automgr.i18n[$.automgr.lang][this.subcategory];
        } else {
            return $.automgr.get_custom_item_by_uid(this.category, this.subcategory);
        }
    },

    _payment_method: function() {
        if($.automgr.i18n[$.automgr.lang][this.payment_method]) {
            return $.automgr.i18n_tag(this.payment_method);
        } else {
            return $.automgr.get_custom_item_by_uid("payment", this.payment_method);
        }
    },

    _fuel: function() {
        if($.automgr.i18n[$.automgr.lang][this.extra3]) {
            return $.automgr.i18n_tag(this.extra3);
        } else {
            return $.automgr.get_custom_item_by_uid("fuel", this.extra3);
        }
    },

    _calc_fuel_data: function(price, cost, amount) {
        var ret = { price: price, cost: cost, amount: amount };
        if(price > 0 && cost > 0 && amount == "") {
            ret.amount = cost / price;
        } else if(price > 0 && cost == "" && amount > 0) {
            ret.cost = price * amount;
        } else if(price == "" && cost > 0 && amount > 0) {
            ret.price = amount / cost;
        }

        return ret;
    },

    _get_csv: function() {
        // date, category, subcategory, cost
        var ret = this.date + "\t";
        ret += this._category() + "\t";
        ret += this.category == "fuel" ? this._fuel() : this._subcategory() + "\t";
        ret += this._amount();

        return ret;
    },

    _check_fields: function() {
        var err_flds = [];

        if(!this.date) {
            err_flds.push("name_date");
        }
        if(!this.amount) {
            err_flds.push("name_cost");
        }
        if(this.category == "repair" && (!this.subcategory || this.subcategory == "-")) {
            err_flds.push("name_repscr_reptype");
        }
        if(this.category == "misc" && (!this.subcategory || this.subcategory == "-")) {
            err_flds.push("name_Misc_type");
        }
        if(this.category == "tires" && (!this.subcategory || this.subcategory == "-")) {
            err_flds.push("name_tires_repair_type");
        }

        return err_flds;
    }
};

function _vehicle() {
    this.uid = md5( "vehicle_" + Math.random().toString() + (new Date()).getTime().toString() );
    this.make = "";
    this.model = "";
    this.year = "";
    this.image = "";
    this.mileage = "";
    this.color = "";
    this.body_type = "";
    this.engine_type = "";
    this.engine_vol = "";
    this.engine_hp = "";
    this.tank_vol = "";
    this.expenses = [];
    this.reminders = [];
    this.documents = {};
    this.fluids = {};
    this.tires = {};
    this.contacts = {};
}

_vehicle.prototype = {
    constructor: _vehicle,

    init: function(stored) {
        if (!stored.uid) {
            stored.uid = md5( "vehicle_" + Math.random().toString() + (new Date()).getTime().toString() );
        }

        if(stored) for(prop in stored) {
            if (stored.hasOwnProperty(prop) && this.hasOwnProperty(prop)) {
                this[prop] = stored[prop];
            }
        }
        return this;
    },

    title: function() {
        return this.make + " " + this.model;
    },

    _brand: function(brand_code) {
        if($.automgr.i18n[$.automgr.lang][brand_code]) {
            return $.automgr.i18n[$.automgr.lang][brand_code];
        } else {
            return $.automgr.get_custom_item_by_uid("brand", brand_code);
        }
    },

    _model: function(model_code) {
        if($.automgr.i18n[$.automgr.lang][model_code]) {
            return $.automgr.i18n[$.automgr.lang][model_code];
        } else {
            return $.automgr.get_custom_item_by_uid("model", model_code);
        }
    },

    filter: function(category, from, to) {
        var result = [];
        this.expenses.forEach( function(element, index, array) {
            if(!category || element.category == category) {
                var d = new Date(element.date);
                if( !from || d >= from ) {
                    if( !to || d <= to ) {
                        result.push( element );
                    }
                }
            }
        });
        result.sort( function(a, b) {
            return ( (new Date(b.date).getTime()) - (new Date(a.date).getTime()) );
        });
        return result;
    },

    check_mileage: function() {
        var last_reminder = $.automgr.last_mileage_alert,
            yesterday = (new Date(("-24 hours").strtotime())).getTime();
        // don't bother user with this alert every time, just once a day
        if( last_reminder < yesterday ) {
            $.automgr.last_mileage_alert = (new Date()).getTime();
        } else {
            return;
        }

        var exp = this.filter(),
            ok = false;

        for(var i = 0; i < exp.length && i < 3; i++) {
            if(exp[i].mileage > 0) ok = true;
        }

        if(!ok && exp.length > 3) {
            window.alert( $.automgr.i18n[$.automgr.lang]["name_no_mileage_alert"] );
        }
    },

    total: function(category, as_string) {
        var total = 0;
        this.filter(category).forEach( function(element, index, array) {
            total += parseFloat(element.amount);
        });
        total = as_string ? numeral(total).format("0,0") + ' ' + $.automgr.currency : total;
        return total;
    },

    current_month: function(as_string) {
        var total = 0,
            now = new Date(),
            cur_mon = now.getMonth() + "-" + now.getFullYear();

        this.expenses.forEach( function(item) {
            var date = new Date( item.date );
            var cur = date.getMonth() + "-"+date.getFullYear();
            if(cur == cur_mon) {
                total += parseFloat(item.amount);
            }
        });

        total = as_string ? numeral(total).format("0,0") + ' ' + $.automgr.currency : total;

        return total;
    },

    save_expense: function(item) {
        if(!item.uid) {
            this.expenses.push(item);
        } else {
            var saved = false;
            for(var i = 0; i < this.expenses.length; i++) {
                if(this.expenses[i].uid == item.uid) {
                    this.expenses[i] = item;
                    saved = true;
                }
            }
            if(!saved) {
                this.expenses.push(item);
            }
        }
        // update vehicle current mileage based on expense's value
        item.mileage = parseInt(item.mileage);
        if (item.mileage > 0 && item.mileage > this.mileage) {
            this.mileage = item.mileage;
        }
        $.automgr.save();

        this.check_mileage();
    },

    remove_expense_by_uid: function(uid) {
        var list = [];
        this.expenses.forEach(function(item, idx, ar) {
            if(item.uid != uid) {
                list.push(item);
            }
        });
        for(var i = this.expenses.length; i > 0; i--) this.expenses.pop();
        for(i = 0; i < list.length; i++) this.expenses.push(list[i]);
    },

    get_expense_by_uid: function(uid) {
        var e = false;
        this.expenses.forEach(function(item, idx, ar) {
            if(item.uid == uid) {
                e = item;
            }
        });
        return new _expense().init(e);
    },

    save_reminder: function(reminder) {
        reminder.vehicle = this.uid;
        if(!reminder.uid) {
            reminder.uid = md5( "reminder_" + Math.random().toString() + (new Date()).getTime().toString() );
            this.reminders.push(reminder);
        } else {
            var saved = false;
            for(var i = 0; i < this.reminders.length; i++) {
                if(this.reminders[i].uid == reminder.uid) {
                    this.reminders[i] = reminder;
                    saved = true;
                }
            }
            if(!saved) this.reminders.push(reminder);
        }
    },

    get_reminder_by_uid: function(uid) {
        for(var i = 0; i < this.reminders.length; i++) {
            if( this.reminders[i].uid == uid ) {
                var r = new _reminder();
                r.init(this.reminders[i]);
                this.reminders[i] = r;
                return this.reminders[i];
            }
        }
        return false;
    },

    remove_reminder_by_uid: function(uid) {
        var list = [];
        this.reminders.forEach(function(item, idx, ar) {
            if(item.uid != uid) {
                list.push(item);
            }
        });
        for(var i = this.reminders.length; i > 0; i--) this.reminders.pop();
        for(i = 0; i < list.length; i++) this.reminders.push(list[i]);
        for(i = 0; i < this.expenses.length; i++) {
            if(this.expenses[i].reminder_uid == uid) {
                this.expenses[i].reminder_uid = '';
                break;
            }
        }
        window.plugin.notification.local.cancel(uid);
    }
};

function _image(uid) {
    this.uid = uid ? uid : md5( "image_" + Math.random().toString() + (new Date()).getTime().toString() );
    this.img_data = "";
    this.url = "";
    this.handle = {};
}

_image.prototype = {
    constructor: _image,

    take_photo: function(options, successCallback, error) {
        var img = this;
        var dialog_options = options["dialog"] != undefined ? options["dialog"] : {};
        var camera_options = {
            quality: 50,
            correctOrientation: true,
            destinationType: Camera.DestinationType.DATA_URL
        };
        if( options["camera"] != undefined ) {
            for(opt in options.camera) {
                if(options.camera.hasOwnProperty(opt)) {
                    camera_options[opt] = options.camera[opt];
                }
            }
        }
        $.automgr.views.render_capture_dialog( dialog_options, function(proceed, mode) {
            if( proceed ) {
                camera_options["sourceType"] = mode;
                camera_options["saveToPhotoAlbum"] = (mode == Camera.PictureSourceType.CAMERA);
                navigator.camera.getPicture(function(imageData) {
                    img.img_data = "data:image/jpeg;base64," + imageData;
                    if (options["save"] != undefined && options["save"] == true) {
                        img.save();
                    }
                    if (successCallback) {
                        successCallback(img.img_data, img.uid);
                    }
                }, function(message) {
                    //console.log(message);
                    if(error) {
                        error(message);
                    }
                }, camera_options);
            } else {
                if( options["custom_callback"] != undefined ) {
                    var fn = options["custom_callback"];
                    if(typeof fn === "function") {
                        fn(mode);
                    }
                }
            }
        });
    },

    save: function() {
        var fname = this.uid + ".dat";

        function fail(e) {
            console.log("image.save() error.");
            if (error) {
                error(e);
            }
        }

        var img_data = this.img_data;

        window.resolveLocalFileSystemURL(cordova.file.syncedDataDirectory, function(dirEntry) {
            dirEntry.getFile(fname, { create: true }, function(fileEntry) {
                fileEntry.createWriter(function(writer) {
                    writer.onwrite = function(evt) {
                        console.log("image.save() ok");
                    };
                    writer.write(img_data);
                }, fail);
            }, fail);
        }, fail);
    },

    load: function(successCallback, error) {
        var fname = this.uid + ".dat";

        function fail(e) {
            console.log("image.load() error.");
            if (error) {
                error(e);
            }
        }

        window.resolveLocalFileSystemURL(cordova.file.syncedDataDirectory, function(dirEntry) {
            dirEntry.getFile(fname, { create: true }, function(fileEntry) {
                fileEntry.file(function(file) {
                    var reader = new FileReader();
                    reader.onloadend = function(evt) {
                        if(evt.target.result) {
                            this.img_data = evt.target.result;
                            if (successCallback) {
                                successCallback(evt.target.result);
                            }
                        } else {
                            if (error) {
                                error(e);
                            }
                        }
                    };
                    reader.readAsText(file);
                }, fail);
            }, fail);
        }, fail);
    },

    load_brand_logo: function(brand, successCallback, error) {
        var url = cordova.file.applicationDirectory + "www/img/brand_logo/" + brand + ".png";

        window.resolveLocalFileSystemURL(url, function(fileEntry) {
            fileEntry.file(function(file) {
                var reader = new FileReader();

                reader.onloadend = function(e) {
                    if (e.target.result) {
                        if (successCallback) {
                            successCallback(e.target.result);
                        }
                    } else {
                        if (error) {
                            error(e);
                        }
                    }
                };
                reader.readAsDataURL(file);
            });
        }, error);
    }
};

function md5 ( str ) {
	this.utf8_encode = function( str_data ) {	// Encodes an ISO-8859-1 string to UTF-8
            // 
            // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    
            str_data = str_data.replace(/\r\n/g,"\n");
            var utftext = "";
    
            for (var n = 0; n < str_data.length; n++) {
                    var c = str_data.charCodeAt(n);
                    if (c < 128) {
                            utftext += String.fromCharCode(c);
                    } else if((c > 127) && (c < 2048)) {
                            utftext += String.fromCharCode((c >> 6) | 192);
                            utftext += String.fromCharCode((c & 63) | 128);
                    } else {
                            utftext += String.fromCharCode((c >> 12) | 224);
                            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                            utftext += String.fromCharCode((c & 63) | 128);
                    }
            }
    
            return utftext;
        };


	var RotateLeft = function(lValue, iShiftBits) {
			return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
		};

	var AddUnsigned = function(lX,lY) {
			var lX4,lY4,lX8,lY8,lResult;
			lX8 = (lX & 0x80000000);
			lY8 = (lY & 0x80000000);
			lX4 = (lX & 0x40000000);
			lY4 = (lY & 0x40000000);
			lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
			if (lX4 & lY4) {
				return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
			}
			if (lX4 | lY4) {
				if (lResult & 0x40000000) {
					return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
				} else {
					return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
				}
			} else {
				return (lResult ^ lX8 ^ lY8);
			}
		};

	var F = function(x,y,z) { return (x & y) | ((~x) & z); };
	var G = function(x,y,z) { return (x & z) | (y & (~z)); };
	var H = function(x,y,z) { return (x ^ y ^ z); };
	var I = function(x,y,z) { return (y ^ (x | (~z))); };

	var FF = function(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

	var GG = function(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

	var HH = function(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

	var II = function(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

	var ConvertToWordArray = function(str) {
			var lWordCount;
			var lMessageLength = str.length;
			var lNumberOfWords_temp1=lMessageLength + 8;
			var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
			var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
			var lWordArray=Array(lNumberOfWords-1);
			var lBytePosition = 0;
			var lByteCount = 0;
			while ( lByteCount < lMessageLength ) {
				lWordCount = (lByteCount-(lByteCount % 4))/4;
				lBytePosition = (lByteCount % 4)*8;
				lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount)<<lBytePosition));
				lByteCount++;
			}
			lWordCount = (lByteCount-(lByteCount % 4))/4;
			lBytePosition = (lByteCount % 4)*8;
			lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
			lWordArray[lNumberOfWords-2] = lMessageLength<<3;
			lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
			return lWordArray;
		};

	var WordToHex = function(lValue) {
			var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
			for (lCount = 0;lCount<=3;lCount++) {
				lByte = (lValue>>>(lCount*8)) & 255;
				WordToHexValue_temp = "0" + lByte.toString(16);
				WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
			}
			return WordToHexValue;
		};

	var x=Array();
	var k,AA,BB,CC,DD,a,b,c,d;
	var S11=7, S12=12, S13=17, S14=22;
	var S21=5, S22=9 , S23=14, S24=20;
	var S31=4, S32=11, S33=16, S34=23;
	var S41=6, S42=10, S43=15, S44=21;

	str = this.utf8_encode(str);
	x = ConvertToWordArray(str);
	a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

	for (k=0;k<x.length;k+=16) {
		AA=a; BB=b; CC=c; DD=d;
		a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
		d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
		c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
		b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
		a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
		d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
		c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
		b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
		a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
		d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
		c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
		b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
		a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
		d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
		c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
		b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
		a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
		d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
		c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
		b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
		a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
		d=GG(d,a,b,c,x[k+10],S22,0x2441453);
		c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
		b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
		a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
		d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
		c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
		b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
		a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
		d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
		c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
		b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
		a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
		d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
		c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
		b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
		a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
		d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
		c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
		b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
		a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
		d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
		c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
		b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
		a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
		d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
		c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
		b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
		a=II(a,b,c,d,x[k+0], S41,0xF4292244);
		d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
		c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
		b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
		a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
		d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
		c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
		b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
		a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
		d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
		c=II(c,d,a,b,x[k+6], S43,0xA3014314);
		b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
		a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
		d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
		c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
		b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
		a=AddUnsigned(a,AA);
		b=AddUnsigned(b,BB);
		c=AddUnsigned(c,CC);
		d=AddUnsigned(d,DD);
	}

	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

	return temp.toLowerCase();
}

function sprintf( ) {	// Return a formatted string
    //
    // +   original by: Ash Searle (http://hexmen.com/blog/)
    // + namespaced by: Michael White (http://crestidg.com)

    var regex = /%%|%(\d+\$)?([-+#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;
    var a = arguments, i = 0, format = a[i++];

    // pad()
    var pad = function(str, len, chr, leftJustify) {
        var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
        return leftJustify ? str + padding : padding + str;
    };

    // justify()
    var justify = function(value, prefix, leftJustify, minWidth, zeroPad) {
        var diff = minWidth - value.length;
        if (diff > 0) {
            if (leftJustify || !zeroPad) {
                value = pad(value, minWidth, ' ', leftJustify);
            } else {
                value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
            }
        }
        return value;
    };

    // formatBaseX()
    var formatBaseX = function(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
        // Note: casts negative numbers to positive ones
        var number = value >>> 0;
        prefix = prefix && number && {'2': '0b', '8': '0', '16': '0x'}[base] || '';
        value = prefix + pad(number.toString(base), precision || 0, '0', false);
        return justify(value, prefix, leftJustify, minWidth, zeroPad);
    };

    // formatString()
    var formatString = function(value, leftJustify, minWidth, precision, zeroPad) {
        if (precision != null) {
            value = value.slice(0, precision);
        }
        return justify(value, '', leftJustify, minWidth, zeroPad);
    };

    // finalFormat()
    var doFormat = function(substring, valueIndex, flags, minWidth, _, precision, type) {
        if (substring == '%%') return '%';

        // parse flags
        var leftJustify = false, positivePrefix = '', zeroPad = false, prefixBaseX = false;
        for (var j = 0; flags && j < flags.length; j++) switch (flags.charAt(j)) {
            case ' ': positivePrefix = ' '; break;
            case '+': positivePrefix = '+'; break;
            case '-': leftJustify = true; break;
            case '0': zeroPad = true; break;
            case '#': prefixBaseX = true; break;
        }

        // parameters may be null, undefined, empty-string or real valued
        // we want to ignore null, undefined and empty-string values
        if (!minWidth) {
            minWidth = 0;
        } else if (minWidth == '*') {
            minWidth = +a[i++];
        } else if (minWidth.charAt(0) == '*') {
            minWidth = +a[minWidth.slice(1, -1)];
        } else {
            minWidth = +minWidth;
        }

        // Note: undocumented perl feature:
        if (minWidth < 0) {
            minWidth = -minWidth;
            leftJustify = true;
        }

        if (!isFinite(minWidth)) {
            throw new Error('sprintf: (minimum-)width must be finite');
        }

        if (!precision) {
            precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type == 'd') ? 0 : void(0);
        } else if (precision == '*') {
            precision = +a[i++];
        } else if (precision.charAt(0) == '*') {
            precision = +a[precision.slice(1, -1)];
        } else {
            precision = +precision;
        }

        // grab value using valueIndex if required?
        var value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

        switch (type) {
            case 's': return formatString(String(value), leftJustify, minWidth, precision, zeroPad);
            case 'c': return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
            case 'b': return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'o': return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'x': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'X': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
            case 'u': return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'i':
            case 'd': {
                var number = parseInt(+value);
                var prefix = number < 0 ? '-' : positivePrefix;
                value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                return justify(value, prefix, leftJustify, minWidth, zeroPad);
            }
            case 'e':
            case 'E':
            case 'f':
            case 'F':
            case 'g':
            case 'G':
            {
                var number = +value;
                var prefix = number < 0 ? '-' : positivePrefix;
                var method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                var textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                value = prefix + Math.abs(number)[method](precision);
                return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
            }
            default: return substring;
        }
    };

    return format.replace(regex, doFormat);
}

function days_label(number) {
    var label = "";
     if(number == 1) {
         label = $.automgr.i18n_tag("name_remind_days_label_1");
     } else if (number > 1 && number < 5) {
         label = $.automgr.i18n_tag("name_remind_days_label_2");
     } else {
         label = $.automgr.i18n_tag("name_remind_days_label_n");
     }
    return label;
}

function date_diff(_date) {
    var now = new Date(), date = new Date(_date);
    return Math.round((date - now)/86400000);
}

function format_date(_date) {
    var date = _date ? new Date(_date) : new Date(),
        fmt = $.automgr.i18n[$.automgr.lang]["date_format"];

    return $.mobiscroll.formatDate(fmt, date);
}

function parse_date(string) {
    var fmt = $.automgr.i18n[$.automgr.lang]["date_format"];
    return $.mobiscroll.parseDate(fmt, string);
}

function strtotime(text, now) {
  //  discuss at: http://phpjs.org/functions/strtotime/
  //     version: 1109.2016
  // original by: Caio Ariede (http://caioariede.com)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Caio Ariede (http://caioariede.com)
  // improved by: A. Matías Quezada (http://amatiasq.com)
  // improved by: preuter
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Mirko Faber
  //    input by: David
  // bugfixed by: Wagner B. Soares
  // bugfixed by: Artur Tchernychev
  //        note: Examples all have a fixed timestamp to prevent tests to fail because of variable time(zones)
  //   example 1: strtotime('+1 day', 1129633200);
  //   returns 1: 1129719600
  //   example 2: strtotime('+1 week 2 days 4 hours 2 seconds', 1129633200);
  //   returns 2: 1130425202
  //   example 3: strtotime('last month', 1129633200);
  //   returns 3: 1127041200
  //   example 4: strtotime('2009-05-04 08:30:00 GMT');
  //   returns 4: 1241425800

  var parsed, match, today, year, date, days, ranges, len, times, regex, i, fail = false;

  if (!text) {
    return fail;
  }

  // Unecessary spaces
  text = text.replace(/^\s+|\s+$/g, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/[\t\r\n]/g, '')
    .toLowerCase();

  // in contrast to php, js Date.parse function interprets:
  // dates given as yyyy-mm-dd as in timezone: UTC,
  // dates with "." or "-" as MDY instead of DMY
  // dates with two-digit years differently
  // etc...etc...
  // ...therefore we manually parse lots of common date formats
  match = text.match(
    /^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/);

  if (match && match[2] === match[4]) {
    if (match[1] > 1901) {
      switch (match[2]) {
      case '-':
        {
          // YYYY-M-D
          if (match[3] > 12 || match[5] > 31) {
            return fail;
          }

          return new Date(match[1], parseInt(match[3], 10) - 1, match[5],
            match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
        }
      case '.':
        {
          // YYYY.M.D is not parsed by strtotime()
          return fail;
        }
      case '/':
        {
          // YYYY/M/D
          if (match[3] > 12 || match[5] > 31) {
            return fail;
          }

          return new Date(match[1], parseInt(match[3], 10) - 1, match[5],
            match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
        }
      }
    } else if (match[5] > 1901) {
      switch (match[2]) {
      case '-':
        {
          // D-M-YYYY
          if (match[3] > 12 || match[1] > 31) {
            return fail;
          }

          return new Date(match[5], parseInt(match[3], 10) - 1, match[1],
            match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
        }
      case '.':
        {
          // D.M.YYYY
          if (match[3] > 12 || match[1] > 31) {
            return fail;
          }

          return new Date(match[5], parseInt(match[3], 10) - 1, match[1],
            match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
        }
      case '/':
        {
          // M/D/YYYY
          if (match[1] > 12 || match[3] > 31) {
            return fail;
          }

          return new Date(match[5], parseInt(match[1], 10) - 1, match[3],
            match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
        }
      }
    } else {
      switch (match[2]) {
      case '-':
        {
          // YY-M-D
          if (match[3] > 12 || match[5] > 31 || (match[1] < 70 && match[1] > 38)) {
            return fail;
          }

          year = match[1] >= 0 && match[1] <= 38 ? +match[1] + 2000 : match[1];
          return new Date(year, parseInt(match[3], 10) - 1, match[5],
            match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
        }
      case '.':
        {
          // D.M.YY or H.MM.SS
          if (match[5] >= 70) {
            // D.M.YY
            if (match[3] > 12 || match[1] > 31) {
              return fail;
            }

            return new Date(match[5], parseInt(match[3], 10) - 1, match[1],
              match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
          }
          if (match[5] < 60 && !match[6]) {
            // H.MM.SS
            if (match[1] > 23 || match[3] > 59) {
              return fail;
            }

            today = new Date();
            return new Date(today.getFullYear(), today.getMonth(), today.getDate(),
              match[1] || 0, match[3] || 0, match[5] || 0, match[9] || 0) / 1000;
          }

          // invalid format, cannot be parsed
          return fail;
        }
      case '/':
        {
          // M/D/YY
          if (match[1] > 12 || match[3] > 31 || (match[5] < 70 && match[5] > 38)) {
            return fail;
          }

          year = match[5] >= 0 && match[5] <= 38 ? +match[5] + 2000 : match[5];
          return new Date(year, parseInt(match[1], 10) - 1, match[3],
            match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
        }
      case ':':
        {
          // HH:MM:SS
          if (match[1] > 23 || match[3] > 59 || match[5] > 59) {
            return fail;
          }

          today = new Date();
          return new Date(today.getFullYear(), today.getMonth(), today.getDate(),
            match[1] || 0, match[3] || 0, match[5] || 0) / 1000;
        }
      }
    }
  }

  // other formats and "now" should be parsed by Date.parse()
  if (text === 'now') {
    return now === null || isNaN(now) ? new Date()
      .getTime() / 1000 | 0 : now | 0;
  }
  if (!isNaN(parsed = Date.parse(text))) {
    return parsed / 1000 | 0;
  }

  date = now ? new Date(now * 1000) : new Date();
  days = {
    'sun': 0,
    'mon': 1,
    'tue': 2,
    'wed': 3,
    'thu': 4,
    'fri': 5,
    'sat': 6
  };
  ranges = {
    'yea': 'FullYear',
    'mon': 'Month',
    'day': 'Date',
    'hou': 'Hours',
    'min': 'Minutes',
    'sec': 'Seconds'
  };

  function lastNext(type, range, modifier) {
    var diff, day = days[range];

    if (typeof day !== 'undefined') {
      diff = day - date.getDay();

      if (diff === 0) {
        diff = 7 * modifier;
      } else if (diff > 0 && type === 'last') {
        diff -= 7;
      } else if (diff < 0 && type === 'next') {
        diff += 7;
      }

      date.setDate(date.getDate() + diff);
    }
  }

  function process(val) {
    var splt = val.split(' '), // Todo: Reconcile this with regex using \s, taking into account browser issues with split and regexes
      type = splt[0],
      range = splt[1].substring(0, 3),
      typeIsNumber = /\d+/.test(type),
      ago = splt[2] === 'ago',
      num = (type === 'last' ? -1 : 1) * (ago ? -1 : 1);

    if (typeIsNumber) {
      num *= parseInt(type, 10);
    }

    if (ranges.hasOwnProperty(range) && !splt[1].match(/^mon(day|\.)?$/i)) {
      return date['set' + ranges[range]](date['get' + ranges[range]]() + num);
    }

    if (range === 'wee') {
      return date.setDate(date.getDate() + (num * 7));
    }

    if (type === 'next' || type === 'last') {
      lastNext(type, range, num);
    } else if (!typeIsNumber) {
      return false;
    }

    return true;
  }

  times = '(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec' +
    '|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?' +
    '|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)';
  regex = '([+-]?\\d+\\s' + times + '|' + '(last|next)\\s' + times + ')(\\sago)?';

  match = text.match(new RegExp(regex, 'gi'));
  if (!match) {
    return fail;
  }

  for (i = 0, len = match.length; i < len; i++) {
    if (!process(match[i])) {
      return fail;
    }
  }

  // ECMAScript 5 only
  // if (!match.every(process))
  //    return false;

  return date.getTime();
}

function calc_fuel_data( $cost, $price, $quantity ) {
    var c = $cost.val();
    var p = $price.val();
    var q = $quantity.val();

    if( c > 0 && p > 0 && !q ) {
        q = Math.round( 100 * c / p ) / 100;
        $quantity.val(q);
    } else if ( c > 0 && q > 0 && !p ) {
        p = Math.round( 100 * c / q ) / 100;
        $price.val(p);
    } else if ( p > 0 && q > 0 && !c ) {
        c = Math.round( 100 * p * q ) / 100;
        $cost.val(c);
    }
}

String.prototype.capitalize = function(lower) {
    return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

String.prototype.strtotime = function(date) {
    date = new Date(date);
    return strtotime(this, date.getTime() / 1000);
};

String.prototype.trimmer = function(max) {
    var title = this;
    if(!max) max = 10;
    if(title.length > max) {
        title = title.substr(0,max/2) + '..' + title.substr(-1*max/2);
    }
    return title;
};

$.fn.exists = function() {
    return this.length !== 0;
};
