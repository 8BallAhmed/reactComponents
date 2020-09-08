A Highly customizeable component that mimicks the booting sequence of
Command Line Interface, similar to old Operating Systems.

[PROPS]


flickerTimer: Determines flickering speed

Module: Determines the Module that will be added after LD command.

typingSpeed: Determines how fast the LD MODULE Command will be typed out. Time is in Milliseconds. Each letter takes n Milliseconds of time to type out, so
if you set typingSpeed to 50, and you have 10 letters, it will take approximately half a second to type out the module.

flickerTextDelay: Determines how much time it will take for the flickering pointer to appear after text is typed out

submodules: Determines the submodules that will be checked after the initial module is loaded

initTime: determines how long it will take for the System to initialize

flickerCount: Determines how many times the pointer will flicker. Always Divide by 2. 6 / 2 = 3, 3 Flickers and it TURNS OFF.
 5 / 2 ~= 3, 3 flickers and it STAYS ON

loadingTime: determines how much time it takes for the loading bar to finish.

For desired results, make sure that ((flickerCount * 1000) / 2) = initTime. On some devices (iPhone 8), the pointer might stay on after flickering even though
// it should be off. This can be fixed by adding 500 to initTime after applying the previous Formula.


RECOMMENDED PROP SETUP: 
    flickerTimer={500}
    module="[INSERT MODULE NAME HERE]"
    typingSpeed={50}
    flickerTextDelay={500}
    initTime={4000}
    flickerCount={4}
    loadingTime={50}
    