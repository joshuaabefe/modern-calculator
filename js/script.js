 // Initialize date display
        function updateDate() {
            const dateElement = document.getElementById('dateDisplay');
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateElement.textContent = now.toLocaleDateString('en-US', options);
        }
        
        // Theme toggle
        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.getElementById('themeToggle');
            
            body.classList.toggle('light-mode');
            
            if (body.classList.contains('light-mode')) {
                themeToggle.textContent = '☀️';
            } else {
                themeToggle.textContent = '🌙';
            }
        }
        
        // Calculator functions
        function percentage() {
            const value = parseFloat(document.calvalue.screen.value);
            if (!isNaN(value)) {
                document.calvalue.screen.value = value / 100;
            }
        }
        
        function plusminus() {
            const value = parseFloat(document.calvalue.screen.value);
            if (!isNaN(value)) {
                document.calvalue.screen.value = value * -1;
            }
        }
        
        function backspace() {
            const current = document.calvalue.screen.value;
            document.calvalue.screen.value = current.slice(0, -1);
        }
        
        function overx() {
            const value = parseFloat(document.calvalue.screen.value);
            if (!isNaN(value) && value !== 0) {
                document.calvalue.screen.value = 1 / value;
            }
        }
        
        function xraise2() {
            const value = parseFloat(document.calvalue.screen.value);
            if (!isNaN(value)) {
                document.calvalue.screen.value = value * value;
            }
        }
        
        function square() {
            const value = parseFloat(document.calvalue.screen.value);
            if (!isNaN(value) && value >= 0) {
                document.calvalue.screen.value = Math.sqrt(value);
            }
        }
        
        function rundivide() {
            document.calvalue.screen.value += "/";
        }
        
        function run7() {
            document.calvalue.screen.value += "7";
        }
        
        function run8() {
            document.calvalue.screen.value += "8";
        }
        
        function run9() {
            document.calvalue.screen.value += "9";
        }
        
        function runmultiple() {
            document.calvalue.screen.value += "*";
        }
        
        function run4() {
            document.calvalue.screen.value += "4";
        }
        
        function run5() {
            document.calvalue.screen.value += "5";
        }
        
        function run6() {
            document.calvalue.screen.value += "6";
        }
        
        function runminus() {
            document.calvalue.screen.value += "-";
        }
        
        function run1() {
            document.calvalue.screen.value += "1";
        }
        
        function run2() {
            document.calvalue.screen.value += "2";
        }
        
        function run3() {
            document.calvalue.screen.value += "3";
        }
        
        function runplus() {
            document.calvalue.screen.value += "+";
        }
        
        function run0() {
            document.calvalue.screen.value += "0";
        }
        
        function rundot() {
            document.calvalue.screen.value += ".";
        }
        
        function runequal() {
            try {
                const result = eval(document.calvalue.screen.value);
                document.calvalue.screen.value = result;
            } catch (error) {
                document.calvalue.screen.value = "Error";
            }
        }
        
        // Keyboard support
        document.addEventListener('keydown', function(event) {
            const key = event.key;
            
            if (key >= '0' && key <= '9') {
                document.calvalue.screen.value += key;
            } else if (key === '+' || key === '-' || key === '*' || key === '/') {
                document.calvalue.screen.value += key;
            } else if (key === '.') {
                rundot();
            } else if (key === 'Enter' || key === '=') {
                event.preventDefault();
                runequal();
            } else if (key === 'Backspace') {
                event.preventDefault();
                backspace();
            } else if (key === 'Escape') {
                document.calvalue.screen.value = '';
            }
        });
        
        // Initialize on load
        updateDate();