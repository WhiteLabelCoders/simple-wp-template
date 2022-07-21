<?php

    /**
     * Insert scripts, styles and fonts
     */

    wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,400,700,300,500', false );
    wp_enqueue_style( 'product-page-css', get_stylesheet_directory_uri() . '/dist/css/bundle.css', array(), '1.0', 'all' );
    wp_enqueue_script( 'product-page-js', get_stylesheet_directory_uri() . '/dist/js/bundle.js', array(), '1.0', true  );


    /**
     * registered menus
     */

    register_nav_menus( array(
		'menu-1' => esc_html__( 'Primary', 'product-landing' ),
		'menu-footer' => esc_html__( 'Footer', 'product-landing' ),
		'menu-footer2' => esc_html__( 'Footer2', 'product-landing' ),
	) );
