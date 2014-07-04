(ns live.core
  (:require [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom :include-macros true]
            
            [om.core :as om :include-macros true])

  (:require-macros [schema.macros :refer [defschema]]))

(defschema Counter
  {:value number})

(defcomponent widget [data :- Counter owner]
  (will-mount [_]
    (om/set-state! owner :n (:init data)))
  (render-state [_ {:keys [n]}]
    (dom/div
      (dom/span (str "Count: " n))
      (dom/h1 (:text data))
      (dom/button
        {:on-click #(om/set-state! owner :n (inc n))}
        "+")
      (dom/button
        {:on-click #(om/set-state! owner :n (dec n))}
        "-")
      (dom/button
        {:on-click #(om/set-state! owner :n (* n n))}
        "^2")
      (dom/button
        {:on-click #(om/set-state! owner :n 0)}
        "Reset"))))

;(defn widget [data owner]
  ;(reify
    ;om/IRender
    ;(render [this]
      ;(dom/h1 nil (:text data)))))

(om/root widget {:text "Hello wurld :O"}
  {:target (. js/document (getElementById "my-app"))})
