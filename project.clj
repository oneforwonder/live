(defproject live "0.1.0-SNAPSHOT"
  :description "Live, dammit!"
  :url "http://github.com/rjn945/live"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
 
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2197"]
                 [om "0.6.4"]
                 [prismatic/om-tools "0.2.2"]
                 [prismatic/schema "0.2.4"]] 

  :plugins [[lein-cljsbuild "1.0.3"]] 
  
  :cljsbuild {
    :builds 
              [{:id "dev"
                :source-paths ["src" "src/live"]
                :compiler {
                           :output-to "main.js"
                           :output-dir "out"
                           :optimizations :none
                           :source-map true }}]})
