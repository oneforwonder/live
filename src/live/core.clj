(ns live.core
  (:use [noir.server :as server] 
        [noir.fetch.remotes]))

(def count (atom 124))

(defremote get-count  []
  (println "in server's get-count")
  (identity @count))

(defremote set-count  [n]
  (println "in server's set-count")
  (set! count n))

(defn -main [& args]
  (server/start 8080))
