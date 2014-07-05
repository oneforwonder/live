(ns live.core
  (:require [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom :include-macros true]
            
            [om.core :as om :include-macros true]
            
            [goog.net.cookies :as cks]
            
            [cljs.reader :as cr])

  (:require-macros [schema.macros :refer [defschema]]))

(def cooky (goog.net.Cookies. js/Document))

(defn setcookie! [n]
  (.set cooky "saved-count" n 500)
  (.log js/console "set cookie"))

;(setcookie! 39)

(defn change-count [owner f n]
  (om/set-state! owner :n (f n))
  (setcookie! (f n)))

(defschema Counter
  {:value number})

(defcomponent widget [data owner]
  (will-mount [_]
    (om/set-state! owner :n (:init data)))
  (render-state [_ {:keys [n]}]
    (dom/div
      (dom/span (str "Count: " n))
      (dom/h1 (:text data))
      (dom/button
        {:on-click #(change-count owner inc n)}
        "+")
      (dom/button
        {:on-click #(change-count owner dec n)}
        "-")
      (dom/button
        {:on-click #(change-count owner (fn [a] (* a a)) n)}
        "^2")
      (dom/button
        {:on-click #(change-count owner (fn [a] (* a 0)) n)}
        "Reset"))))

(.log js/console cooky)
      ;(.max-cookie-length goog.net.cookies "saved-count")) 

;(defn widget [data owner]
  ;(reify
    ;om/IRender
    ;(render [this]
      ;(dom/h1 nil (:text data)))))

(om/root widget {:init (cr/read-string (.get cooky "saved-count"))}
  {:target (. js/document (getElementById "my-app"))})
