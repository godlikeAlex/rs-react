# React Profiler Performance Report

## 1. Search Component

### Before Optimization
- **Flamegraph (Before):**  
  ![telegram-cloud-photo-size-2-5305332037575638319-y](https://github.com/user-attachments/assets/f802ddd6-475d-4694-be5d-2f894097d6a5)
- **Ranked (Before):**  
  ![telegram-cloud-photo-size-2-5305332037575638321-y](https://github.com/user-attachments/assets/05db6081-d516-41d3-87ff-69c33b20a467)
  

### After Optimization
- **Flamegraph (After):**  
  ![telegram-cloud-photo-size-2-5305332037575638449-y](https://github.com/user-attachments/assets/fb1aa519-83b7-4feb-8f42-9f213a638321)
- **Ranked (After):**  
  ![telegram-cloud-photo-size-2-5305332037575638460-y](https://github.com/user-attachments/assets/38f7fc22-01a4-4419-a2f9-01ae00b46e9d)


**Performance Improvement:** `~6.6x faster render time`  

---

## 2. Year Select Component

### Before Optimization
- **Flamegraph (Before):**  
  ![telegram-cloud-photo-size-2-5305332037575638331-y](https://github.com/user-attachments/assets/92e02931-b7d6-4c83-9dc1-4fab9e20f8ba)

- **Ranked (Before):**  
  ![telegram-cloud-photo-size-2-5305332037575638332-y](https://github.com/user-attachments/assets/5a675c11-81e3-4c2d-9383-16acfa1e521c)

### After Optimization
- **Flamegraph (After):**  
  ![telegram-cloud-photo-size-2-5305332037575638465-y](https://github.com/user-attachments/assets/f2ca069a-6c95-4903-b49e-d74481da470d)
- **Ranked (After):**  
  ![telegram-cloud-photo-size-2-5305332037575638466-y](https://github.com/user-attachments/assets/73b26495-6e80-4208-8a8a-74d058ba9845)

**Performance Improvement:** `~7.3x reduced render duration`  

---

## 3. Select New Columns Component

### Before Optimization
- **Flamegraph (Before):**  
  ![telegram-cloud-photo-size-2-5305332037575638333-y](https://github.com/user-attachments/assets/70dcffd8-93f7-4221-93de-75a16108246c)
- **Ranked (Before):**  
  ![telegram-cloud-photo-size-2-5305332037575638334-y](https://github.com/user-attachments/assets/15a92b70-3b9d-4434-bda5-831b8fdd8641)

### After Optimization
- **Flamegraph (After):**  
  ![telegram-cloud-photo-size-2-5305332037575638467-y](https://github.com/user-attachments/assets/b44691a9-c266-4b8d-bfb9-3465d32057f5)
- **Ranked (After):**  
  ![telegram-cloud-photo-size-2-5305332037575638468-y](https://github.com/user-attachments/assets/985bf938-43b4-4ee8-962b-24f8c9b7d57d)

**Performance Improvement:** `~9.5x improvement in render efficiency`  

---

## 4. Sort Columns Component

### Before Optimization
- **Flamegraph (Before):**  
  ![telegram-cloud-photo-size-2-5305332037575638338-y](https://github.com/user-attachments/assets/46ad7985-4bb4-45bc-aca4-b959db3602d9)
- **Ranked (Before):**  
  ![telegram-cloud-photo-size-2-5305332037575638339-y](https://github.com/user-attachments/assets/fcdfd0c3-e766-4a48-8127-9d1f3c8ed931)
 

### After Optimization
- **Flamegraph (After):**  
  ![telegram-cloud-photo-size-2-5305332037575638469-y](https://github.com/user-attachments/assets/6c53d20c-22dc-4b72-aba3-c7ee91c7f882)
- **Ranked (After):**  
  ![telegram-cloud-photo-size-2-5305332037575638493-y](https://github.com/user-attachments/assets/79f3194b-707a-4eb5-9450-05ae999db2f6)

**Performance Improvement:** `~15x improvement in render efficiency`  

---

## Summary

Overall, after the applied optimizations:  
- Rendering time decreased across all tested components.  
- Flamegraphs show fewer wasted renders and shorter commit times.  
- Ranked views highlight significant reductions in slow component updates.  

**Total Application Performance Improvement:** `~8x`  
