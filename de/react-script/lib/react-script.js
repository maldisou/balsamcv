// Generated by CoffeeScript 1.9.1
(function() {
  var E, React, add, hyphenate, is_plainish_object, ref,
    slice = [].slice;

  React = (ref = this.React) != null ? ref : require("react");

  is_plainish_object = function(o) {
    return (o != null) && typeof o === "object" && !(o instanceof Array || React.isValidElement(o));
  };

  add = function(from, arg) {
    var i, k, len, thing, to, v;
    to = arg.to;
    if (from instanceof Array) {
      for (i = 0, len = from.length; i < len; i++) {
        thing = from[i];
        add(thing, {
          to: to
        });
      }
      return true;
    } else if (is_plainish_object(from)) {
      for (k in from) {
        v = from[k];
        if (v) {
          to.push(hyphenate(k));
        }
      }
      return true;
    } else if (from != null) {
      to.push(from);
    }
    return false;
  };

  hyphenate = function(v) {
    return ("" + v).replace(/_/g, "-").replace(/([a-z])([A-Z])/g, function(m, az, AZ) {
      return az + "-" + (AZ.toLowerCase());
    });
  };

  E = function() {
    var addAttr, args, aria_k, aria_v, attr_args, attr_k, attr_v, child_arg, child_args, class_names, data_k, data_v, element_type, final_attributes, final_child_args, i, len, partial_selector, selector, unhandled, was_dynamic, will_have_been_dynamic;
    element_type = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if (element_type == null) {
      element_type = "";
    }
    if (is_plainish_object(args[0])) {
      attr_args = args[0], child_args = 2 <= args.length ? slice.call(args, 1) : [];
    } else {
      child_args = 1 <= args.length ? slice.call(args, 0) : [];
      attr_args = null;
    }
    switch (typeof element_type) {
      case "string":
        selector = element_type;
        element_type = "div";
        partial_selector = selector.replace(/^[a-z][a-z0-9\-_]*/i, function(match) {
          element_type = match;
          return "";
        });
        final_attributes = {};
        class_names = [];
        addAttr = function(attr_k, attr_v, aria) {
          if (!(attr_v === false && !aria)) {
            return final_attributes[attr_k] = attr_v;
          }
        };
        for (attr_k in attr_args) {
          attr_v = attr_args[attr_k];
          if (attr_k === "class" || attr_k === "className" || attr_k === "classes" || attr_k === "classNames" || attr_k === "classList") {
            add(attr_v, {
              to: class_names
            });
          } else if (attr_k === "data") {
            for (data_k in attr_v) {
              data_v = attr_v[data_k];
              addAttr("data-" + (hyphenate(data_k)), data_v);
            }
          } else if (attr_k === "aria") {
            for (aria_k in attr_v) {
              aria_v = attr_v[aria_k];
              addAttr("aria-" + (hyphenate(aria_k)), aria_v, true);
            }
          } else if (attr_k.match(/^data/)) {
            addAttr(hyphenate(attr_k), attr_v);
          } else if (attr_k.match(/^aria/)) {
            addAttr(hyphenate(attr_k), attr_v, true);
          } else {
            addAttr(attr_k, attr_v);
          }
        }
        if (partial_selector) {
          unhandled = partial_selector.replace(/\.([a-z][a-z0-9\-_]*)/gi, function(m, className) {
            class_names.push(className);
            return "";
          }).replace(/#([a-z][a-z0-9\-_]*)/gi, function(m, id) {
            final_attributes.id = id;
            return "";
          });
        }
        if (unhandled) {
          throw new Error("Unhandled selector fragment '" + unhandled + "' in selector: '" + selector + "'");
        }
        if (class_names.length) {
          final_attributes.className = class_names.join(" ");
        }
        break;
      case "function":
        final_attributes = attr_args;
        break;
      default:
        throw new Error("Invalid first argument to ReactScript: " + element_type);
    }
    final_child_args = [];
    was_dynamic = false;
    for (i = 0, len = child_args.length; i < len; i++) {
      child_arg = child_args[i];
      will_have_been_dynamic = add(child_arg, {
        to: final_child_args
      });
      was_dynamic || (was_dynamic = will_have_been_dynamic);
    }
    if (was_dynamic) {
      return React.createElement(element_type, final_attributes, final_child_args);
    } else {
      return React.createElement.apply(React, [element_type, final_attributes].concat(slice.call(final_child_args)));
    }
  };

  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
    module.exports = E;
  } else {
    this.ReactScript = E;
  }

}).call(this);
